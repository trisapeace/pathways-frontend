import * as constants from '../application/constants';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import createMemoryHistory from 'history/createMemoryHistory';
import * as reduxFirstRouter from 'redux-first-router';
import { rootReducer as reducerForAppState } from '../stores';
import { Store as StoreForAppState } from '../stores';

export type Store = {
    readonly appState: StoreForAppState,
};

const routesMap = {
    [constants.SET_MAIN_TAB]: '/user/:mainTab',
};

const history = createMemoryHistory();
// tslint:disable-next-line:typedef
const { enhancer, middleware, reducer } = reduxFirstRouter.connectRoutes(history, routesMap);
const reducerWithRouting = combineReducers({ location: reducer, appState: reducerForAppState });
export const store = createStore(reducerWithRouting, compose(enhancer, applyMiddleware(middleware)));

reduxFirstRouter.push('/user/MainPage.Two');
