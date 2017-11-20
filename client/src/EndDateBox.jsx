import React from 'react';
import propTypes from 'prop-types';

const EndDateBox = ({ onInput, onEnter }) => {
  return (
    <div className="inputBox">
      <label className="endDate" htmlFor="endDate">
        End Date:
        <input
          id="endDate"
          type="text"
          name="endDate"
          onChange={event => onInput(event)}
          placeholder="enter an end date"
          onKeyUp={event => onEnter(event)}
        />
      </label>
    </div>
  );
};

export default EndDateBox;
