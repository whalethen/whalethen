import React from 'react';

const CreateEventBox = (props) => {
  const {
    addNewEvent,
    numberOfDays,
    onCreateDaySelect,
    createEventDay,
  } = props;
  const daysArr = ['Choose Day'];
  for (let i = 1; i <= numberOfDays; i += 1) {
    daysArr.push(`Day ${i}`);
  }

  return (
    <div>
      <div>
        <input />
      </div>

      <div>
        <select className="selectDays" onChange={onCreateDaySelect}>
          {daysArr.map(day => <option value={day} key={day}>{day}</option>)}
        </select>
      </div>

      <div>
        <button
          className="addEvent"
          onClick={() => addNewEvent(null, createEventDay)}
        >
            Add Event
        </button>
      </div>
    </div>
  );
};

export default CreateEventBox;
