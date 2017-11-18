import React from 'react';

const SearchBar = (props) => {
  return (
    <div className="searchBar">
      <input></input>
      <button className="searchSubmit" onClick={props.onSubmit}>Search Things To Do</button>
    </div>
  );
};

{/*SearchBar.propTypes = {
  props: React.PropTypes.object.isRequired
};*/}


export default SearchBar;
