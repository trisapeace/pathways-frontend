import { Platform } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';

import { reducer as reducerForApplicationState, Store as StoreForApplicationState } from '../stores';
import { buildSaga, runSaga } from '../sagas';
import { buildRouter } from './router';

import { loadCurrentLocaleActions } from '../stores/locale';

export type Store = {
    readonly applicationState: StoreForApplicationState,
};

const router = buildRouter();
const saga = buildSaga();
const middleware = applyMiddleware(router.middleware, saga.middleware);

const composeEnhancers = composeWithDevTools({
    hostname: 'localhost', port: 5678,
    name: Platform.OS,
});
const enhancers = composeEnhancers(router.enhancer, middleware);
const reducer = combineReducers({ location: router.reducer, applicationState: reducerForApplicationState });

export const store = createStore(reducer, enhancers);

runSaga(saga.middleware); // tslint:disable-line:no-expression-statement
store.dispatch(loadCurrentLocaleActions.request()); // tslint:disable-line:no-expression-statement
