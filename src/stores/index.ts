import { combineReducers } from 'redux';
import * as mainTabs from './main_tabs';
import * as counter from './counter';
import * as message from './message';

export interface Store {
    readonly categoryInStore: mainTabs.Store;
    readonly counterInStore: counter.Store;
    readonly messageInStore: message.Store;
}

export const rootReducer = combineReducers({
    categoryInStore: mainTabs.reducer,
    counterInStore: counter.reducer,
    messageInStore: message.reducer,
});
