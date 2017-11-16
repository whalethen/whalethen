import React from 'react';

const SearchListEntry = (props) => {
  let daysArr = [];
  for (let i = 0, i < props.days, i++) {
    daysArr.push(`Day ${i}`);
  } 

  return (
    
    <div>
      <div>
      {props.event.name} {props.event.address} {props.event.rating}

      </div>  
      <select name="days" value={props.value} onChange={props.handleChange}>
        {daysArr.map(day => <option value={day}>{day}</option>
      )}
      </select>
    </div>  
  )
}




export default SearchListEntry;
