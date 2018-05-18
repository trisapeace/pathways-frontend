import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools as compose } from 'remote-redux-devtools';

import { reducer as reducerForApplicationState, Store as StoreForApplicationState } from '../stores';
import { buildSaga, runSaga } from '../sagas';
import { buildRouter } from './router';

import { loadFontsActions } from '../stores/fonts';
import { loadCurrentLocaleActions } from '../stores/locale';

export type Store = {
    readonly applicationState: StoreForApplicationState,
};

const router = buildRouter();
const saga = buildSaga();
const middleware = applyMiddleware(router.middleware, saga.middleware);

const enhancers = compose(router.enhancer, middleware);
const reducer = combineReducers({ location: router.reducer, applicationState: reducerForApplicationState });

export const store = createStore(reducer, enhancers);

runSaga(saga.middleware); // tslint:disable-line:no-expression-statement
// tslint:disable-next-line:no-expression-statement
store.dispatch(loadFontsActions.request({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
}));
store.dispatch(loadCurrentLocaleActions.request()); // tslint:disable-line:no-expression-statement
