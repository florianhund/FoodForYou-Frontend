import { AnyAction } from 'redux';

import ActionTypes from '../constants';

// TODO: implement User interface
export interface InitialState {
  profile: Record<string, any> | null;
  isSignedIn: boolean;
}

const initialState: InitialState = { profile: null, isSignedIn: false };

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN:
      return { ...state, isSignedIn: true, profile: action.payload };
    case ActionTypes.SIGN_OUT:
      return { ...state, isSignedIn: false, profile: null };
    default:
      return state;
  }
};

export default reducer;
