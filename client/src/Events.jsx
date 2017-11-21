import React from 'react';
import propTypes from 'prop-types';


const Events = ({ event }) => (
  <div className="event">
    <div className="eventName">{event.name}</div>
    <div className="description">{event.address}</div>
    <div className="vote">Votes: {event.votes}</div>
  </div>
);


// Events.propTypes = {
//   SOMEDATA: React.PropTypes.object.isRequired
// };

export default Events;
