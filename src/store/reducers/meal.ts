import { AnyAction } from 'redux';

import ActionTypes from '../constants';

interface Meal {
  _id: string;
  name: string;
  price: number;
  isVegetarian: boolean;
  isVegan: boolean;
  rating: number;
  calories: number;
  restaurant: {
    _id: string;
    ref: string;
    href: string;
  };
  description?: string;
  allergenics?: any[];
  tags?: any[];
  images: { mediaId: string; href: string; url: string }[];
}

export interface InitialState {
  meals: Meal[];
  isLoading: boolean;
}

const initialState: InitialState = {
  meals: [],
  isLoading: true
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_MEALS:
      return { ...state, meals: action.payload.data as Meal[] };
    default:
      return state;
  }
};

export default reducer;
