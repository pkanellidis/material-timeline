import * as React from 'react';


export interface TimelineProps {
    isOneWay?: boolean,
	wrapItem: (item, index) => { },
	isLeft: (item, index) => { },
	stackedImages?: boolean
}

declare const Timeline: React.ComponentType<TimelineProps>;
export default Timeline;