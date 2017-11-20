import React from 'react';


const Events = (props) => {
  return (
    <div className="event">
      <div className="eventName">Event Name</div>
      <div className="description">description</div>
      <div className="vote">votes</div>
    </div>
  );
};

// Events.propTypes = {
//   SOMEDATA: React.PropTypes.object.isRequired
// };

export default Events;
