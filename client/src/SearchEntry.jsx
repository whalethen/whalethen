import React from 'react';
import propTypes from 'prop-types';

const SearchListEntry = ({ event, numberOfDays }) => (
  <div className="searchEntry">
    {/* <div> */}
    <div className="eventName">{event.name}</div>
    <div className="eventAddress">{event.address}</div>
    <div className="eventRating">{event.rating}</div>

    {/* </div>
    <select name="days">
      {daysArr.map(day => <option value={day}>{day}</option>
    )}
    </select> */}
  </div>
);

SearchListEntry.propTypes = {
  event: propTypes.object.isRequired,
  numberOfDays: propTypes.number,
};

export default SearchListEntry;
