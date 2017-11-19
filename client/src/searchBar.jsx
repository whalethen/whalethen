import React from 'react';

const SearchBar = (props) => {
  return (
    <div className="searchBar">
      <input />
      <button className="searchSubmit" onClick={props.onSubmit}>Search</button>
    </div>
  );
};

{/*SearchBar.propTypes = {
  props: React.PropTypes.object.isRequired
};*/}


export default SearchBar;
