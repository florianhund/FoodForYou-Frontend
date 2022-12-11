import ActionTypes from '../constants';
import { AppDispatch } from '../reducers';
import { getMeals } from '../services';

export const getAllMeals = () => async (dispatch: AppDispatch) => {
  try {
    const { data } = await getMeals('', '');

    dispatch({ type: ActionTypes.FETCH_ALL_MEALS, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export default {};
