import ActionTypes from '../constants';
import { AppDispatch } from '../reducers';

export const setSelectedTab =
  (tab: string) => async (dispatch: AppDispatch) => {
    dispatch({
      type: ActionTypes.SET_SELECTED_TAB,
      payload: { selectedTab: tab }
    });
  };
