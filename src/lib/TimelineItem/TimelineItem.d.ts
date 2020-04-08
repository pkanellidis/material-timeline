import PropTypes from 'prop-types';
import * as React from 'react';


export interface TimelineItemProps {
    yearBackgroundColor: PropTypes.string,
    yearColor: PropTypes.string,
    iconContent: PropTypes.element,
    cardHeaderChildren: PropTypes.node,
    cardContentChildren: PropTypes.node,
    cardMediaProps:
    {
        imgUrl: PropTypes.string,
        height: PropTypes.string
    }
    ,
    expandableCardContent: PropTypes.bool,
    titleChildren: PropTypes.node,
    padTop: PropTypes.bool,
    timelineItemWidth: PropTypes.string,
    hasDivider: PropTypes.bool,
    customLine: PropTypes.string
}

declare const TimelineItem: React.ComponentType<TimelineItemProps>;
export default TimelineItem;