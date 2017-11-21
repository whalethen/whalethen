import React from 'react';
import propTypes from 'prop-types';

const StartDateBox = ({ onInput, onEnter }) => (
  <div className="inputBox">
    <label className="startDate" htmlFor="startDate">
    Start Date:
    <input
      id="startDate"
      type="text"
      name="startDate"
      onChange={event => onInput(event)}
      placeholder="enter a start date"
      onKeyUp={event => onEnter(event)}
    />
    </label>
  </div>
);


export default StartDateBox;
