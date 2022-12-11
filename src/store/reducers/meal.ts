import { AnyAction } from 'redux';
import ActionTypes from '../constants';

const reducer = (state = { meals: [], isLoading: true }, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_MEALS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
