import React from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';
import Event from './Events';

const Day = ({ day }) => (
  <div className="dayView">
    <div className="dayTitle">Day {day.day}</div>
    <div className="events">
      {_.map(day.events, (event, index) => <Event event={event} key={index} />)}
    </div>
  </div>
);


Day.propTypes = {
  day: propTypes.object.isRequired,
};

export default Day;
