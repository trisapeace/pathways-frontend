import { combineReducers } from 'redux';
import * as navigationBar from './navigation_bar';
import * as counter from './counter';
import * as locale from './locale';
import * as message from './message';

export interface Store {
    readonly navigationBarInStore: navigationBar.Store;
    readonly counterInStore: counter.Store;
    readonly localeInStore: locale.Store;
    readonly messageInStore: message.Store;
}

export const reducer = combineReducers<Store>({
    navigationBarInStore: navigationBar.reducer,
    counterInStore: counter.reducer,
    localeInStore: locale.reducer,
    messageInStore: message.reducer,
});
