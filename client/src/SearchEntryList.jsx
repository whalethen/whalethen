import React from 'react';
import SearchEntry from './SearchEntry.jsx'
import propTypes from '../../node_modules/prop-types';


const SearchEntryList = (props) => {
  return (
    <div>
      {props.searchList.map((entry, index) => {
        return <SearchEntry entry={entry} key={index} />
      })}
    </div>
  );
};

export default SearchEntryList;