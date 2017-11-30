import { combineReducers } from 'redux';
//import { routerReducer } from 'react-router-redux';
import voting from './voting';
import events from './events';

// const state = {
//   timelineData: [],
//   timelineName: 'testTimeline', // temp until we get some more data built up
//   startDate: '',
//   endDate: '',
//   numberOfDays: 0,
//   timelineId: 'S1nnbsNlG', // temp until we get a way to produce these
//   createEventDay: '',
//   newEvent: '',
//   newEventAddress: '',
// };

const appState = (state = {}, action) => {
  switch (action.type) {
    case 'ON_INPUT_CHANGE':
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};


export default combineReducers({ voting, events, appState });
