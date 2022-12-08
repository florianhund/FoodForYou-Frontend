import { combineReducers } from 'redux';

import tabReducer from '../tab/reducer';
import meals from './meal';
import tabs from './tab';

export default combineReducers({ meals, tabs, tabReducer });
