import React from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';
import DayView from './Day';
import CreateEventBox from './CreateEventBox';

const Timeline = (props) => {
  const {
    timelineData,
    addNewEvent,
    numberOfDays,
    onCreateDaySelect,
    createEventDay,
  } = props;

  return (
    <div className="container timeline">
      {/* <div className="timelineTitle">Timeline</div> */}
      <div>
        <CreateEventBox
          addNewEvent={addNewEvent}
          numberOfDays={numberOfDays}
          onCreateDaySelect={onCreateDaySelect}
          createEventDay={createEventDay}
        />
      </div>
      <div className="container day">
        {_.map(timelineData, (day, index) => <DayView day={day} key={index} />)}
      </div>
    </div>
  )
};

Timeline.propTypes = {
  timelineData: propTypes.instanceOf(Array).isRequired,
  addNewEvent: propTypes.func.isRequired,
  numberOfDays: propTypes.number.isRequired,
  onCreateDaySelect: propTypes.func.isRequired,
  createEventDay: propTypes.number.isRequired,
};

export default Timeline;
