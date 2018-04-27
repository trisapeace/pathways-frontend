import { combineReducers } from 'redux';
import * as pageSwitcher from './page_switcher';
import * as locale from './locale';
import * as questionnaire from './questionnaire';

export interface Store {
    readonly mainPageInStore: pageSwitcher.Store;
    readonly localeInStore: locale.Store;
    readonly questionnaireInStore: questionnaire.Store;
}

export const reducer = combineReducers<Store>({
    mainPageInStore: pageSwitcher.reducer,
    localeInStore: locale.reducer,
    questionnaireInStore: questionnaire.reducer,
});
