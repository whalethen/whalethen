import React from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';
import Event from './Events';

const Day = ({ day }) => (
  <div className="dayView">
    <div className="dayTitle">Day X</div>
    <div className="events">
      {_.map(day, (event, index) => <Event event={event} key={index} />)}
    </div>
  </div>
);


Day.propTypes = {
  day: propTypes.instanceOf(propTypes.object).isRequired,
};

export default Day;
