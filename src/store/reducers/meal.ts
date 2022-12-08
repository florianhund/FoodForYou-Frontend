import ActionTypes from '../constants';

export default (state = { meals: [] }, action: any) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_MEALS:
      return action.payload;
    default:
      return state;
  }
};
