import { combineReducers } from 'redux';
import * as mainTabs from './navigation_bar';
import * as counter from './counter';
import * as message from './message';

export interface Store {
    readonly mainTabsInStore: mainTabs.Store;
    readonly counterInStore: counter.Store;
    readonly messageInStore: message.Store;
}

export const reducer = combineReducers<Store>({
    mainTabsInStore: mainTabs.reducer,
    counterInStore: counter.reducer,
    messageInStore: message.reducer,
});
