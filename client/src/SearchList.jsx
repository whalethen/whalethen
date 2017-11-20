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

{/*SearchBar.propTypes = {
 props: React.PropTypes.object.isRequired
};*/}

export default SearchList;
