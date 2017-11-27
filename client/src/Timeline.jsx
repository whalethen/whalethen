import React from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';
import DayView from './Day';

const Timeline = ({ timelineData, timelineId }) => (
  <div className="container timeline">
    {/* <div className="timelineTitle">Timeline</div> */}
    <div className="container day">
      {_.map(timelineData, (day, index) => <DayView timelineId={timelineId} day={day} key={index} />)}
    </div>
  </div>
);

Timeline.propTypes = {
  timelineData: propTypes.instanceOf(Array).isRequired,
};

export default Timeline;
