import React from 'react';
import propTypes from 'prop-types';

const CreateEventBox = (props) => {
  const {
    numberOfDays,
    onCreateDaySelect,
    handleNewEvent,
    handleNewAddress,
    createEvent,
  } = props;

  const daysArr = ['Choose Day'];
  for (let i = 1; i <= numberOfDays; i += 1) {
    daysArr.push(`Day ${i}`);
  }

  return (
    <div className="container createBox">
      <label className="createEvent" htmlFor="createEvent">
        <div>
          <input
            id="createEventName"
            type="text"
            name="createEventName"
            placeholder="enter an event"
            onChange={handleNewEvent}
          />
        </div>

        <div>
          <input
            id="createEventAddress"
            type="text"
            name="createEventAddress"
            placeholder="enter an address"
            onChange={handleNewAddress}
          />
        </div>

        <div>
          <select className="selectDays" onChange={onCreateDaySelect}>
            {daysArr.map(day => <option value={day} key={day}>{day}</option>)}
          </select>
        </div>

        <div>
          <button
            className="addEvent"
            onClick={createEvent}
          >
                Create Event
          </button>
        </div>
      </label>
    </div>
  );
};

CreateEventBox.propTypes = {
  numberOfDays: propTypes.number.isRequired,
  onCreateDaySelect: propTypes.func.isRequired,
  handleNewEvent: propTypes.func.isRequired,
  handleNewAddress: propTypes.func.isRequired,
  createEvent: propTypes.func.isRequired,
};

export default CreateEventBox;
