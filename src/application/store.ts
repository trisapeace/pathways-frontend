import * as reduxFirstRouter from 'redux-first-router';
import { reducer, Store as StoreForAppState } from '../stores';
import { createStoreWithRouter } from './router';

export type Store = {
    readonly appState: StoreForAppState,
};

export const store = createStoreWithRouter(reducer);

reduxFirstRouter.push('/user/MainPage.Two');
