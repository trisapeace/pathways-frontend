import { Locale } from '../../components/language_switcher/view_model';
import * as locale from '../locale';
import * as constants from '../../application/constants';
import * as helpers from '../helpers/make_action';

const buildStore = (): locale.Store => locale.reducer(undefined, undefined);

const aLocale = { code: 'ar', label: 'Arabic', catalog: {}, isRTL: true };

const buildStoreWithLocale = (theLocale: Locale): locale.Store => {
    const action = helpers.makeAction(constants.SET_LOCALE_SUCCESS, { locale: theLocale });
    return locale.reducer(undefined, action);
};

describe('the action for', () => {

    describe('setLocale', () => {

        it('should create action with type SET_LOCALE_REQUEST', () => {
            const theSetLangAction = locale.setLocaleActions.request(aLocale);
            // tslint:disable-next-line:no-expression-statement
            expect(theSetLangAction.type).toBe(constants.SET_LOCALE_REQUEST);
        });

        it('should create action with payload containing the locale', () => {
            const theSetLangAction = locale.setLocaleActions.request(aLocale);
            // tslint:disable-next-line:no-expression-statement
            expect(theSetLangAction.payload.locale).toBe(aLocale);
        });
    });
});

describe('the reducer', () => {
    it('should default to build a store with default locale code `en`', () => {
        const theStore = locale.reducer();
        // tslint:disable-next-line:no-expression-statement
        expect(theStore.code).toBe('en');
    });

    it('when called with SET_LOCALE_SUCCESS should return store with locale code from action', () => {
        const theStore = buildStore();
        const theAction = {
            type: constants.SET_LOCALE_SUCCESS as typeof constants.SET_LOCALE_SUCCESS,
            payload: { locale: aLocale },
        };
        const theNewStore = locale.reducer(theStore, theAction);
        // tslint:disable-next-line:no-expression-statement
        expect(theNewStore.code).toBe(theAction.payload.locale.code);
    });

    it('should return store unchanged if action is undefined', () => {
        const theOriginalStore = buildStoreWithLocale(aLocale);
        const theNewStore = locale.reducer(theOriginalStore, undefined);
        // tslint:disable-next-line:no-expression-statement
        expect(theNewStore.code).toBe(theOriginalStore.code);
    });
});
