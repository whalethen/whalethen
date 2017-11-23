import React from 'react';
import propTypes from 'prop-types';

const CreateEventBox = (props) => {
  const {
    addNewEvent,
    numberOfDays,
    onCreateDaySelect,
    createEventDay,
    handleNewEvent,
    handleNewAddress,
    createEvent,
  } = props;

  const daysArr = ['Choose Day'];
  for (let i = 1; i <= numberOfDays; i += 1) {
    daysArr.push(`Day ${i}`);
  }

  return (
    <div>
      <div>
        <input
          placeholder="enter an event"
          onChange={handleNewEvent}
        />
      </div>

      <div>
        <input
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
    </div>
  );
};

CreateEventBox.propTypes = {
  addNewEvent: propTypes.func.isRequired,
  numberOfDays: propTypes.number.isRequired,
  onCreateDaySelect: propTypes.func.isRequired,
  createEventDay: propTypes.string.isRequired,
  handleNewEvent: propTypes.func.isRequired,
  handleNewAddress: propTypes.func.isRequired,
  createEvent: propTypes.func.isRequired,
};

export default CreateEventBox;
