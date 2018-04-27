import { combineReducers } from 'redux';
import * as pageSwitcher from './page_switcher';
import * as locale from './locale';

export interface Store {
    readonly mainPageInStore: pageSwitcher.Store;
    readonly localeInStore: locale.Store;
}

export const reducer = combineReducers<Store>({
    mainPageInStore: pageSwitcher.reducer,
    localeInStore: locale.reducer,
});
