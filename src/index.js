import React, { useState } from 'react';
import { render } from "react-dom";
import {timelineItems as data, createTimelineItem} from './util/util'
import Timeline from './lib/Timeline/Timeline';

const App = () => {

  const result = window.matchMedia('(min-width: 800px)');
  const [isDesktop, setIsDesktop] = useState(result.matches)
  
  const isLeft = (item, index) => {
		return index % 2 === 0
	}

  result.onchange = (event) => setIsDesktop(event.matches);

  const timelineItems = Object.keys(data.TimelineItems).map((key, index) => {
    createTimelineItem(key, data.TimelineItems[key], index, isDesktop);
  })

  return (
    <React.Fragment>
      <Timeline
        isLeft={isLeft}
        isOneWay={!isDesktop}
        >
          {timelineItems}
      </Timeline>
    </React.Fragment>
  )
};

render(<App />, document.getElementById("root"));
