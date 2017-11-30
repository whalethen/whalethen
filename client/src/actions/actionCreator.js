// ADD_EVENT
export const addEvent = event => ({
  type: 'ADD_EVENT',
  event,
});
// REMOVE_EVENT
export const removeEvent = event => ({
  type: 'REMOVE_EVENT',
  event,
});
// INCREMENT_VOTE
export const incrementVote = () => ({
  type: 'INCREMENT_VOTE',
});
// DECREMENT_VOTE
export const decrementVote = () => ({
  type: 'DECREMENT_VOTE',
});

export const onInputChange = (name, value) => ({
  type: 'ON_INPUT_CHANGE',
  name,
  value,
});

export const generateId = () => ({
  type: 'GENERATE_ID',
});

export const setId = (id) => ({
  type: 'SET_ID',
  id,
});
