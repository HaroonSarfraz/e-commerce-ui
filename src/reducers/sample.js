import initialState from '../store/initialState';
import * as  types from '../actions/types';

export default (state = initialState.sample, action) => {
  switch (action.type) {
    case types.SAMPLE_ACTION:
      return { ...state, isLoading: false }
    default:
      return state
  }
}
