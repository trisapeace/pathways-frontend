import { I18nManager } from 'react-native';
import * as constants from '../application/constants';
import * as helpers from './helpers/make_action';
import { Locale } from '../components/language_switcher/view_model';

export type Store = Readonly<ReturnType<typeof buildDefaultStore>>;
export type SetLocaleAction = Readonly<ReturnType<typeof setLocale>>;

// tslint:disable-next-line:typedef
export const setLocale = (locale: Locale) => {
    // TODO: Maybe this side-effect should be lifted into custom Redux middleware?
    //       Alternatively in connect()'s mapStateToProps callback alongside the dispatch() call.
    I18nManager.forceRTL(locale.isRTL); // tslint:disable-line:no-expression-statement
    // This needs to happen *after* locale is persisted to ensure that we reload with correct locale.
    Expo.Util.reload(true); // tslint:disable-line:no-expression-statement

    return helpers.makeAction(constants.SET_LOCALE, { locale });
};

const DEFAULT_LOCALE_CODE = 'en';
// tslint:disable-next-line:typedef
const buildDefaultStore = () => (
    { code: DEFAULT_LOCALE_CODE }
);

export const reducer = (store: Store = buildDefaultStore(), action?: SetLocaleAction): Store => {
    if (!action) {
        return store;
    }
    switch (action.type) {
        case constants.SET_LOCALE:
            return { ...store, code: action.payload.locale.code };
        default:
            return store;
    }
};