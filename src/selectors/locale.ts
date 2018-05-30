import { Store as LocaleStore } from '../stores/locale';
import * as app from '../application/store';
import * as model from '../stores/locale';

export const selectLocaleStore = (appStore: app.Store): LocaleStore => {
    return appStore.applicationState.localeInStore;
};

export function selectLocaleCode(localeStore: model.Store): string {
    return localeStore.code;
}

export const selectLocale = (appStore: app.Store): string => {
    return selectLocaleCode(selectLocaleStore(appStore));
};
