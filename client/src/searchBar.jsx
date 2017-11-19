import React from 'react';
import propTypes from 'prop-types';

const SearchBar = props => (
  <div className="searchBar">
    <input />
    <button className="searchSubmit" onClick={props.onSubmit}>Search</button>
  </div>
);


{/*SearchBar.propTypes = {
  props: React.PropTypes.object.isRequired
};*/}


export default SearchBar;
