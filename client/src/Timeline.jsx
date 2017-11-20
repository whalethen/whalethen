import React from 'react';
import DayView from './Day'

const Timeline = props => (
  <div className="container timeline">
    {/* <div className="timelineTitle">Timeline</div> */}
    <div className="container day">
      <DayView />
      <DayView />
      <DayView />
      <DayView />
      <DayView />
      <DayView />
      <DayView />
      <DayView />
      <DayView />
    </div>
  </div>
);



export default Timeline;
