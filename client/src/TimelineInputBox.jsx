import React from 'react';
import propTypes from 'prop-types';

const TimelineInputBox = ({ onInput, onEnter }) => (
  <div className="inputBox">
    <label className="timelineName" htmlFor="timelineName">
    Timeline Name:
    <input
      id="timelineName"
      type="text"
      name="timelineName"
      onChange={event => onInput(event)}
      placeholder="enter a name"
      onKeyUp={event => onEnter(event)}
    />
    </label>
  </div>
);


export default TimelineInputBox;
