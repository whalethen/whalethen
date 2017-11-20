import React from 'react';
import Event from './Events';
import _ from 'lodash';

const Day = ({ day }) => {
  return (
    <div className="dayView">
      <div className="dayTitle">Day X</div>
      <div className="events">
        {_.map(day, (event, index) => <Event event={event} key={index} />)}
      </div>
    </div>
  );
};

// Day.propTypes = {
//   SOMEDATA: React.PropTypes.object.isRequired
// };

export default Day;
