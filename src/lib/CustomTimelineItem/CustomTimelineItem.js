import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';
import { directions } from '../enums/enums'

export const useStyles = makeStyles(theme => {
	return {
		TimelineItem: {
			width: props => props.timelineItemWidth
				? props.timelineItemWidth : '50%',
			alignContent: 'center',
		},
		TimelineItemFull: {
			width: props => props.timelineItemWidth
				? props.timelineItemWidth : '100%',
			alignSelf: 'flex-start',
			flexDirection: 'row',
			display: 'flex',
		},
		TimelineContent: {
			marginLeft: '-1em',
		},
		ArrowLeft: {
			display: 'flex',
			flexDirection: 'row',
			marginTop: theme.spacing(2),
			direction: 'ltr',
			marginLeft: (props) => !props.isOneWay ? '64px' : '0',
			'&::before': {
				content: '" "',
				width: 0,
				height: 0,
				borderTop: '0.5em solid white',
				borderBottom: '0.5em solid white',
				borderLeft: '0.5em solid white',
				borderRight: '0.5em solid white',
				boxShadow: '-1px 2px 1px -1px rgba(0,0,0,0.4)',
				transformOrigin: '0 0',
				transform: 'rotate(45deg)',
				marginLeft: '1em'
			}
		},
		ArrowRight: {
			display: 'flex',
			flexDirection: 'row-reverse',
			marginTop: theme.spacing(2),
			direction: 'ltr',
			marginRight: (props) => !props.isOneWay ? '64px' : '0',
			'&::before': {
				content: '" "',
				width: 0,
				height: 0,
				borderTop: '0.5em solid white',
				borderBottom: '0.5em solid white',
				borderLeft: '0.5em solid white',
				borderRight: '0.5em solid white',
				boxShadow: '2px -1px 1px -1px rgba(0,0,0,0.4)',
				transformOrigin: '0 0',
				transform: 'rotate(45deg)',
			},

		},
		timelineYearWrapper: {
			content: '" "',
			background: (props) => props.customLine ? props.customLine :
				'linear-gradient(' + props.yearBackgroundColor + ',' + props.yearBackgroundColor + ' ) no-repeat center/4px 100%',
			height: '100%',
			display: 'block',
		},
		timelineYear: {
			alignSelf: 'flex-start',
		},
		listDotLeft: {
			position: 'absolute',
			left: '50%',
			transform: 'translate(-50%, 0)',
			height: '100%'
		},
		listDotRight: {
			position: 'absolute',
			right: '50%',
			transform: 'translate(50%, 0)',
			height: '100%'
		}
	}
})

const CustomTimelineItem = props => {

	const classes = useStyles(props);

	let listDotDirection;
	if (!props.isOneWay) {
		listDotDirection = props.direction === directions.LEFT ?
			classes.listDotLeft : classes.listDotRight
	}

	let finalItem;

	if (props.isStackedImage) {
		finalItem = (
			<div className={props.isOneWay ? [classes.TimelineItemFull, props.className].join(' ')
				: [classes.TimelineItem, props.className].join(' ')}>
				<div className={listDotDirection}>
					<div className={classes.timelineYear}>
						{props.middleItemContent}
					</div>
					<div className={classes.timelineYearWrapper}>

					</div>
				</div>
				<Box className={props.direction === directions.LEFT ? classes.ArrowLeft : classes.ArrowRight}>
					<div component='div' className={classes.TimelineContent}>
						{props.itemContent}
					</div>
				</Box>
			</div>
		)
	}
	else {
		finalItem = (
			<div {...props} className={props.isOneWay ? [classes.TimelineItemFull, props.className].join(' ')
				: [classes.TimelineItem, props.className].join(' ')}>
				<div className={listDotDirection}>
					<div className={classes.timelineYear}>
						{props.middleItemContent}
					</div>
					<div className={classes.timelineYearWrapper}>

					</div>
				</div>
				<Box className={props.direction === directions.LEFT ? classes.ArrowLeft : classes.ArrowRight}>
					<div className={classes.TimelineContent}>
						{props.itemContent}
					</div>
				</Box>
			</div>
		)
	}

	return finalItem;
};

CustomTimelineItem.propTypes = {
	middleItemContent: PropTypes.element,
	itemContent: PropTypes.element,
	timelineItemWidth: PropTypes.string,
	customLine: PropTypes.string
};

export default CustomTimelineItem;
