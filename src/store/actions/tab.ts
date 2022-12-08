import ActionTypes from '../constants';

export const setSelectedTab = (tab: any) => async (dispatch: any) => {
  dispatch({
    type: ActionTypes.SET_SELECTED_TAB,
    payload: { selectedTab: tab }
  });
};
