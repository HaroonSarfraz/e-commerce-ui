import { combineReducers } from 'redux';
import sample from './sample';
import { reduxTokenAuthReducer } from 'redux-token-auth' // Devise Token Auth

export default combineReducers({
  reduxTokenAuth: reduxTokenAuthReducer,
  sample
});
