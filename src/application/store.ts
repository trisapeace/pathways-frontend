import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

import { reducer as reducerForApplicationState, Store as StoreForApplicationState } from '../stores';
import { buildSaga, runSaga } from '../sagas';
import { buildRouter } from './router';

import { loadCurrentLocaleActions } from '../stores/locale';

export type Store = {
    readonly applicationState: StoreForApplicationState,
};

const router = buildRouter();
const saga = buildSaga();

const reducer = combineReducers({ location: router.reducer, applicationState: reducerForApplicationState });
const middleware = applyMiddleware(router.middleware, saga.middleware);
export const store = createStore(reducer, compose(router.enhancer, middleware));

store.dispatch(loadCurrentLocaleActions.request()); // tslint:disable-line:no-expression-statement
runSaga(saga.middleware); // tslint:disable-line:no-expression-statement
