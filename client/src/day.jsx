import React from 'react';
import Event from './events';

const Day = (props) => {
  return (
    <div className="dayView">
      <div className="dayTitle">Day X</div>
      <div className="events">
        <Event event={props} />
        <Event event={props} />
        <Event event={props} />
        <Event event={props} />
        <Event event={props} />
      </div>
    </div>
  );
};

// Day.propTypes = {
//   SOMEDATA: React.PropTypes.object.isRequired
// };

export default Day;
