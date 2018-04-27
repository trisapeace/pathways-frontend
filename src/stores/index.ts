import { combineReducers } from 'redux';
import * as mainPage from './main_page';
import * as counter from './counter';
import * as locale from './locale';
import * as message from './message';

export interface Store {
    readonly mainPageInStore: mainPage.Store;
    readonly counterInStore: counter.Store;
    readonly localeInStore: locale.Store;
    readonly messageInStore: message.Store;
}

export const reducer = combineReducers<Store>({
    mainPageInStore: mainPage.reducer,
    counterInStore: counter.reducer,
    localeInStore: locale.reducer,
    messageInStore: message.reducer,
});
