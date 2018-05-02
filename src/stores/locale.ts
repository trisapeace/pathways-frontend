import * as constants from '../application/constants';
import * as helpers from '../application/helpers/redux-helpers';

export type Store = Readonly<ReturnType<typeof buildDefaultStore>>;
export type SetLocaleAction = Readonly<ReturnType<typeof setLocale>>;

// tslint:disable-next-line:typedef
export const setLocale = (code: string) => (
    helpers.makeAction(constants.SET_LOCALE, { code })
);

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
            return { ...store, code: action.payload.code};
        default:
            return store;
    }
};