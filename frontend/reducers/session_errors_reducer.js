import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, RESET_ERRORS} from '../actions/session'

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case RESET_ERRORS:
        return [];
    default:
      return state;
  }
};