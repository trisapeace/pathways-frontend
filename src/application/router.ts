import { Platform } from 'react-native';
import { Reducer, createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import * as reduxFirstRouter from 'redux-first-router';
import createMemoryHistory from 'history/createMemoryHistory';
import * as constants from '../application/constants';
import { Store as StoreForApplicationState } from '../stores';

const routesMap = {
    [constants.SET_MAIN_TAB]: '/user/:mainPage',
};

export const createStoreWithRouter = (reducerForApplicationState: Reducer<StoreForApplicationState>) => {
    const history = createMemoryHistory();
    const router = reduxFirstRouter.connectRoutes(history, routesMap);
    const rootReducer = combineReducers({ location: router.reducer, applicationState: reducerForApplicationState });
    const composeEnhancers = composeWithDevTools({
      name: Platform.OS,
      hostname: 'localhost',
      port: 5678,
    });
    return createStore(rootReducer, composeEnhancers(
        router.enhancer,
        applyMiddleware(router.middleware),
    ));
};
