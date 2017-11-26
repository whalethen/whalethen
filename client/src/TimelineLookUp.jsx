import React from 'react';
import propTypes from 'prop-types';

const TimelineLookUp = props => (
  <div className="inputBox">
    <label className="timelineLookUp" htmlFor="timelineLookUp">
      Timeline Look Up:
    <input
      id="timelineLookUp"
      type="text"
      name="timelineLookUp"
      onChange={props.handleID}
      placeholder="enter ID"
    />
      <input
        id="timelineLookUp"
        type="text"
        name="timelineLookUp"
        onChange={props.handleName}
        placeholder="enter Name"
      />
      <button className="searchSubmit" onClick={props.getTrip}>Search ID</button>
    </label>
  </div>
);

TimelineLookUp.propTypes = {
  handleID: propTypes.func.isRequired,
  handleName: propTypes.func.isRequired,
  getTrip: propTypes.func.isRequired,
};

export default TimelineLookUp;
