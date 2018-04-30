import * as reduxFirstRouter from 'redux-first-router';
import { reducer, Store as StoreForApplicationState } from '../stores';
import { createStoreWithRouter } from './router';

export type Store = {
    readonly applicationState: StoreForApplicationState,
};

export const store = createStoreWithRouter(reducer);

reduxFirstRouter.push('/user/MainPage.Two');
