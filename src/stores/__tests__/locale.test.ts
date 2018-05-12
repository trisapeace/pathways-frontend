import { Locale } from '../../components/language_switcher/view_model';
import * as locale from '../locale';
import * as constants from '../../application/constants';
import * as helpers from '../helpers/make_action';

const buildStore = (): locale.Store => locale.reducer(undefined, undefined);

const aLocale = { code: 'ar', label: 'Arabic', catalog: {}, isRTL: true };

const buildStoreWithLocale = (theLocale: Locale): locale.Store => {
    const action = helpers.makeAction(constants.SET_LOCALE, { locale: theLocale });
    return locale.reducer(undefined, action);
};

describe('the action for', () => {

    describe('setLocale', () => {

        it('should create action with type SET_LOCALE', () => {
            const theSetLangAction = locale.setLocale(aLocale);
            expect(theSetLangAction.type).toBe(constants.SET_LOCALE);
        });

        it('should create action with payload containing locale code', () => {
            const theSetLangAction = locale.setLocale(aLocale);
            expect(theSetLangAction.payload.locale).toBe(aLocale);
        });
    });
});

describe('the reducer', () => {
    it('should default to build a store with default locale code `en`', () => {
        const theStore = locale.reducer();
        expect(theStore.code).toBe('en');
    });

    it('when called with SET_LOCALE should return store with locale code from action', () => {
        const theStore = buildStore();
        const theAction = {
            type: constants.SET_LOCALE as typeof constants.SET_LOCALE,
            payload: { locale: aLocale },
        };
        const theNewStore = locale.reducer(theStore, theAction);
        expect(theNewStore.code).toBe(theAction.payload.locale.code);
    });

    it('should return store unchanged if action is undefined', () => {
        const theOriginalStore = buildStoreWithLocale(aLocale);
        const theNewStore = locale.reducer(theOriginalStore, undefined);
        expect(theNewStore.code).toBe(theOriginalStore.code);
    });
});
