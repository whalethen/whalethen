import React from 'react';


const SearchList = (props) => {
 return (
   <div>
     <h2>hi</h2>
     {props.searchList.map(entry => {
       return <li>{entry.title}</li>
     })}
   </div>
 );
};

{/*SearchBar.propTypes = {
 props: React.PropTypes.object.isRequired
};*/}

export default SearchList;