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

const generateNewProps = (props, direction) => {
	let newProps = {
		isOneWay: props.isOneWay,
		direction: direction,
	}

	if (props.stackedImages != null) {
		newProps = {
			...newProps,
			isStackedImage: props.stackedImages
		}
	}
	
	return newProps;
}

const Timeline = (props) => {

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

			const newProps = generateNewProps(props, isLeft ? directions.RIGHT : directions.LEFT)

			processedItem = (
				<li className={isLeft ?
					[classes.leftDirection, classes.TimelineElement].join(' ') :
					[classes.rightDirection, classes.TimelineElement].join(' ')}>

					{React.cloneElement(item, (oldProps) => {
						return 
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
			
			const newProps = generateNewProps(props, direction)

			processedItem = (
				<li className={direction === directions.LEFT ? [classes.leftDirection, classes.TimelineElement].join(' ')
					: [classes.rightDirection, classes.TimelineElement].join(' ')}>
					{React.cloneElement(item, newProps)}
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

}

const TimelinePropTypes = {
	isOneWay: PropTypes.bool,
	wrapItem: (item, index) => { },
	isLeft: (item, index) => { },
	stackedImages: PropTypes.bool
};

Timeline.propTypes = TimelinePropTypes;

export default Timeline;
