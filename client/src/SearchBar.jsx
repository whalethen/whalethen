import React from 'react';
import propTypes from 'prop-types';

const SearchBar = props => (
  <div className="searchBar">
    <input />
    <button className="searchSubmit" onClick={props.onSubmit}>Search</button>
  </div>
);

SearchBar.propTypes = {
  onSubmit: propTypes.func.isRequired,
  handleLoc: propTypes.func.isRequired,
  handleCat: propTypes.func.isRequired,
};


export default SearchBar;
