import ActionTypes from '../constants';
import { AppDispatch } from '../reducers';
import {
  signIn as signInService,
  signOut as signOutService
} from '../services';
import { getUserByEmail } from '../services';

export const signIn =
  (email: string, password: string, callback: Function) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await signInService({ email, password });
      console.log(response.headers);
      console.log(response.status);
      const { data } = await getUserByEmail(email);

      callback();
      dispatch({ type: ActionTypes.SIGN_IN, payload: data });
    } catch (err: any) {
      console.log(err?.response?.headers);
      console.log(err?.response?.status);
      console.log(err?.response?.data);
      console.log('err');
    }
  };

export const signOut = () => async (dispatch: AppDispatch) => {
  try {
    await signOutService();

    dispatch({ type: ActionTypes.SIGN_OUT });
  } catch (err) {
    console.log(err);
  }
};
