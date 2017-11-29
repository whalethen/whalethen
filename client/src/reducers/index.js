import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import voting from './voting';
import events from './events';

export default combineReducers({ voting, events, routing: routerReducer });
