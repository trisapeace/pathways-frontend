import * as constants from '../../application/constants';
import * as setLocale from './set_locale';
import * as loadCurrentLocale from './load_current_locale';
import { SetLocale } from './set_locale';
import { LoadCurrentLocale } from './load_current_locale';

export type Store = Readonly<ReturnType<typeof buildDefaultStore>>;
export { SetLocale };
export { LoadCurrentLocale };

const DEFAULT_LOCALE_CODE = 'en';
// tslint:disable-next-line:typedef
const buildDefaultStore = () => (
    { code: DEFAULT_LOCALE_CODE }
);

export const setLocaleActions = setLocale;
export const loadCurrentLocaleActions = loadCurrentLocale;

export const reducer = (store: Store = buildDefaultStore(), action?: SetLocale.Success): Store => {
    if (!action) {
        return store;
    }
    switch (action.type) {
        case constants.SET_LOCALE_SUCCESS:
            return { ...store, code: action.payload.locale.code };
        default:
            return store;
    }
};