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
    handleNewEvent,
    handleNewAddress,
    createEvent,
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
          handleNewEvent={handleNewEvent}
          handleNewAddress={handleNewAddress}
          createEvent={createEvent}
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
  createEventDay: propTypes.string.isRequired,
  handleNewEvent: propTypes.func.isRequired,
  handleNewAddress: propTypes.func.isRequired,
  createEvent: propTypes.func.isRequired,
};

export default Timeline;
