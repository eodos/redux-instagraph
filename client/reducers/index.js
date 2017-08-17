import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

export const rootReducer = combineReducers({ posts, comments, routing: routerReducer });