import React from 'react';
import DayView from './Day';
import _ from 'lodash';

const Timeline = ({ timelineData }) => (
  <div className="container timeline">
    {/* <div className="timelineTitle">Timeline</div> */}
    <div className="container day">
      {_.map(timelineData, (day, index) => <DayView day={day} key={index} />)}
    </div>
  </div>
);



export default Timeline;
