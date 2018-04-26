import * as constants from '../application/constants';
import { Reducer, createStore, compose, applyMiddleware, combineReducers } from 'redux';
import createMemoryHistory from 'history/createMemoryHistory';
import * as reduxFirstRouter from 'redux-first-router';
import { reducer, Store as StoreForAppState } from '../stores';

export type Store = {
    readonly appState: StoreForAppState,
};

const buildStoreWithRouter = (reducerForAppState: Reducer<StoreForAppState>) => {
    const routesMap = {
        [constants.SET_MAIN_TAB]: '/user/:mainTab',
    };
    const history = createMemoryHistory();
    const connected = reduxFirstRouter.connectRoutes(history, routesMap);
    const reducerWithRouting = combineReducers({ location: connected.reducer, appState: reducerForAppState });
    return createStore(reducerWithRouting, compose(connected.enhancer, applyMiddleware(connected.middleware)));
};

export const store = buildStoreWithRouter(reducer);

reduxFirstRouter.push('/user/MainPage.Two');
