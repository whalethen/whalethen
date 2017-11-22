import React from 'react';
import propTypes from 'prop-types';


const Events = ({ event }) => (
  <div className="event">
    <div className="eventName">Event Name</div>
    <div className="description">description</div>
    <div className="vote">votes</div>
  </div>
);


Events.propTypes = {
  event: propTypes.instanceOf(Object).isRequired,
};

export default Events;
