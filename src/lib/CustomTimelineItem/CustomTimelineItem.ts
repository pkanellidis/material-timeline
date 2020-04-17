import PropTypes from 'prop-types';
import { HTMLAttributes } from 'react';


interface CustomTimelineItemProps extends HTMLAttributes<T>{
    middleItemContent: PropTypes.ReactNodeLike,
	itemContent: PropTypes.ReactNodeLike,
	timelineItemWidth: string,
	customLine: string
}

export default function CustomTimelineItem(props: CustomTimelineItemProps): JSX.Element;