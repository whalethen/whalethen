import React from 'react';

const SearchEntry = (props) => {
 return (
   <div>
     <li>{ props.entry.name }</li>
   </div>
 );
};

{/*SearchBar.propTypes = {
 props: React.PropTypes.object.isRequired
};*/}

export default SearchEntry;
