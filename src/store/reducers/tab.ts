import ActionTypes from '../constants';

export default (state = { selectedTab: '' }, action: any) => {
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
