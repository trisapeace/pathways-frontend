import { combineReducers } from 'redux';
import * as category from './category';
import * as counter from './counter';
import * as message from './message';

export interface Store {
    readonly categoryInStore: category.Store;
    readonly counterInStore: counter.Store;
    readonly messageInStore: message.Store;
}

export const rootReducer = combineReducers({
    categoryInStore: category.reducer,
    counterInStore: counter.reducer,
    messageInStore: message.reducer,
});
