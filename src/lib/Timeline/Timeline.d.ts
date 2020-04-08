import PropTypes from 'prop-types';
import * as React from 'react';


export interface TimelineProps {
    isOneWay?: PropTypes.bool,
	wrapItem: (item, index) => { },
	isLeft: (item, index) => { },
	stackedImages?: PropTypes.bool
}

declare const Timeline: React.ComponentType<TimelineProps>;
export default Timeline;