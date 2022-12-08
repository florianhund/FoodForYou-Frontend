import ActionTypes from '../constants';
import { getMeals } from '../services';

export const getAllMeals = () => async (dispatch: any) => {
  try {
    const { data } = await getMeals('', '');

    dispatch({ type: ActionTypes.FETCH_ALL_MEALS, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export default {};
