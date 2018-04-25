import * as constants from '../application/constants';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import createMemoryHistory from 'history/createMemoryHistory';
import { connectRoutes, push } from 'redux-first-router';
import { rootReducer as reducerForAppState } from '../stores';
import { Store as StoreForAppState } from '../stores';

export type Store = {
    readonly appState: StoreForAppState,
};

const routesMap = {
    [constants.SET_MAIN_TAB]: '/user/:mainTab',
};

const history = createMemoryHistory();
const { enhancer, middleware, reducer } = connectRoutes(history, routesMap);
const reducerWithRouting = combineReducers({ location: reducer, appState: reducerForAppState });
export const store = createStore(reducerWithRouting, compose(enhancer, applyMiddleware(middleware)));

push('/user/MainPage.Two');
