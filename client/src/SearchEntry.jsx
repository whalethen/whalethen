import React from 'react';
import propTypes from 'prop-types';

const SearchListEntry = ({ event, numberOfDays=4, addNewEvent }) => {
  const daysArr = [];
  for (let i = 1; i <= numberOfDays; i+1) {
    daysArr.push(`Day ${i}`);
  }

  return (
    <div className="searchEntry">
      <div className="eventName">{event.name}</div>
      <div className="eventAddress">{event.address}</div>
      <div className="eventRating">{event.rating}</div>

      <div>
        <select className="selectDays">
          {daysArr.map(day => <option value={day} key={day}>{day}</option>)}
        </select>
      </div>

      <div>
        <button className="addEvent">Add Event</button>
      </div>
    </div>
  )
};

export default SearchListEntry;
