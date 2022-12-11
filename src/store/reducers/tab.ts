import { AnyAction } from 'redux';

import ActionTypes from '../constants';

const reducer = (state = { selectedTab: '' }, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.SET_SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.payload.selectedTab
      };
    default:
      return state;
  }
};

export default reducer;
