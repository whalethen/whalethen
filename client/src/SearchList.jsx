import React from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';
import SearchEntry from './SearchEntry';


const SearchList = ({ searchList, numberOfDays, addNewEvent, onDaySelect, selectedDay }) => (
  <div className="searchList">
    {_.map(searchList, (event, index) => (
      <SearchEntry
        numberOfDays={numberOfDays}
        key={index}
        event={event}
        addNewEvent={addNewEvent}
        onDaySelect={onDaySelect}
        selectedDay={selectedDay}
      />
      ))}
  </div>
);

{/*SearchBar.propTypes = {
 props: React.PropTypes.object.isRequired
};*/}

export default SearchList;
