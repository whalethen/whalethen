import React from 'react';
import propTypes from 'prop-types';

const SearchBar = props => (
  <div className="searchBar">
    <input
      id="location"
      type="text"
      placeholder="location"
      onKeyUp={props.handleLoc}
    />
    <input
      id="category"
      type="text"
      placeholder="category"
      onKeyUp={props.handleCat}
    />
    <button className="searchSubmit" onClick={props.onSubmit}>Search</button>
  </div>
);

SearchBar.propTypes = {
  onSubmit: propTypes.func.isRequired,
  handleLoc: propTypes.func.isRequired,
  handleCat: propTypes.func.isRequired,
};


export default SearchBar;
