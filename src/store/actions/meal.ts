import ActionTypes from '../constants';
import { AppDispatch } from '../reducers';
import { getAllMeals as getAllMealsService } from '../services';

export const getAllMeals = () => async (dispatch: AppDispatch) => {
  try {
    const { data } = await getAllMealsService('', '');

    dispatch({ type: ActionTypes.FETCH_ALL_MEALS, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export default {};
