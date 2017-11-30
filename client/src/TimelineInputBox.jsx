import React from 'react';
import propTypes from 'prop-types';

const TimelineInputBox = ({ onInputChange, onEnter }) => (
  <div className="inputBox label">
    <label className="timelineName" htmlFor="timelineName">
    Timeline Name:
    <input
      id="timelineName"
      type="text"
      name="timelineName"
      onChange={({ target }) => onInputChange(target.name, target.value)}
      placeholder="enter a name"
      onKeyUp={event => onEnter(event)}
    />
    </label>
  </div>
);

TimelineInputBox.propTypes = {
  onInput: propTypes.func.isRequired,
  onEnter: propTypes.func.isRequired,
};

export default TimelineInputBox;
