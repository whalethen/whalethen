import React from 'react';
import propTypes from 'prop-types';

const TimelineLookUp = ({ handleID, handleName, getTrip }) => (
  <div className="container timelineLookUp">
    <label className="timelineLookUp" htmlFor="timelineLookUp">
      Timeline Look Up:
    <input
      id="timelineLookUp"
      type="text"
      name="timelineLookUp"
      onChange={handleID}
      placeholder="enter ID"
    />
      <input
        id="timelineLookUp"
        type="text"
        name="timelineLookUp"
        onChange={handleName}
        placeholder="enter Name"
      />
      <button className="searchTimeline" onClick={getTrip}>Search ID</button>
    </label>
  </div>
);

TimelineLookUp.propTypes = {
  handleID: propTypes.func.isRequired,
  handleName: propTypes.func.isRequired,
  getTrip: propTypes.func.isRequired,
};

export default TimelineLookUp;
