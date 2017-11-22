import React from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';
import SearchEntry from './SearchEntry';


const SearchList = ({ searchList, numberOfDays }) => (
  <div className="searchList">
    {_.map(searchList, (event, index) => (
      <SearchEntry days={numberOfDays} key={index} event={event} />
      ))}
  </div>
);

SearchList.propTypes = {
  searchList: propTypes.instanceOf(Array).isRequired,
  numberOfDays: propTypes.number.isRequired,
};

export default SearchList;
