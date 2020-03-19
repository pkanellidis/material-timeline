import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core'
import { directions } from '../enums/enums'

const useStyles = makeStyles(theme => {
	return {
		Timeline: {
			listStylePosition: 'inside',
			listStyleType: 'none',
			marginLeft: 0,
			paddingLeft: '1em',
		},
		TimelineElement: {
			position: "relative", /* so that pseudoelements are positioned relatively to their "li"s*/
			/* use padding-bottom instead of margin-bottom.*/
			marginBottom: "0", /* This overrides previously specified margin-bottom */

		},
		leftDirection: {
			direction: 'ltr'
		},
		rightDirection: {
			direction: 'rtl',
		}
	}
})

const Timeline = React.memo((props) => {

	const classes = useStyles(props);

	const processedItems = React.Children.map(props.children, (item, index) => {
		let processedItem;
		if (!props.isOneWay) {
			
			let isLeft;
			if (props.isLeft) {
				isLeft = props.isLeft(item, index)
			}
			else {
				isLeft = index % 2 === 0
			}

			processedItem = (
				<li className={isLeft ?
					[classes.leftDirection, classes.TimelineElement].join(' ') :
					[classes.rightDirection, classes.TimelineElement].join(' ')}>

					{React.cloneElement(item, {
						direction: isLeft ? directions.RIGHT : directions.LEFT
					})}
				</li>

			)
		}
		else {

			let direction;
			const isInvalidValidValue = !props.side || (props.side &&
				 (props.side !== directions.LEFT && props.side !== directions.RIGHT))

			if (isInvalidValidValue) {
				direction = directions.LEFT
			}
			else {
				direction = props.side
			}

			processedItem = (
				<li className={direction === directions.LEFT ? [classes.leftDirection, classes.TimelineElement].join(' ')
					: [classes.rightDirection, classes.TimelineElement].join(' ')}>
					{React.cloneElement(item, {
						isOneWay: props.isOneWay,
						direction: direction
					})}
				</li>
			)
		}

		return props.wrapItem ? props.wrapItem(processedItem, index) : processedItem
	})

	return (
		<ul className={classes.Timeline}>
			{processedItems}
		</ul>
	)

})

const TimelinePropTypes = {
	isOneWay: PropTypes.bool,
	wrapItem: PropTypes.func,
	isLeft: PropTypes.func,
};

Timeline.propTypes = TimelinePropTypes;

export default Timeline;
