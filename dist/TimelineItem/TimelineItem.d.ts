import PropTypes from 'prop-types';
import { HTMLAttributes } from 'react';


interface TimelineItemProps extends HTMLAttributes<T>{
    yearBackgroundColor: string,
    yearColor: string,
    iconContent: PropTypes.ReactNodeLike,
    cardHeaderChildren: PropTypes.ReactNodeLike,
    cardContentChildren: PropTypes.ReactNodeLike,
    cardMediaProps:
    {
        imgUrl: string,
        height: string
    },
    expandableCardContent: boolean,
    titleChildren: PropTypes.ReactNodeLike
    padTop: boolean
    timelineItemWidth: PropTypes.ReactNodeLike,
    hasDivider: boolean,
    customLine: string
}

export default function TimelineItem(props: TimelineItemProps): JSX.Element;