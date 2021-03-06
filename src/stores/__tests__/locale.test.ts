// tslint:disable:no-expression-statement

import * as locale from '../locale';
import * as constants from '../../application/constants';
import * as helpers from '../helpers/make_action';

const buildStore = (): locale.Store => locale.reducer(undefined, undefined);

const buildStoreWithLocale = (code: string): locale.Store => {
    const action = helpers.makeAction(constants.SET_LOCALE, { code });
    return locale.reducer(undefined, action);
};

describe('the action for', () => {

    describe('setLocale', () => {

        it('should create action with type SET_LOCALE', () => {
            const code = 'ar';
            const theSetLangAction = locale.setLocale(code);
            expect(theSetLangAction.type).toBe(constants.SET_LOCALE);
        });

        it('should create action with payload containing locale code', () => {
            const code = 'ar';
            const theSetLangAction = locale.setLocale(code);
            expect(theSetLangAction.payload.code).toBe(code);
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
            payload: { code: 'ar' },
        };
        const theNewStore = locale.reducer(theStore, theAction);
        expect(theNewStore.code).toBe(theAction.payload.code);
    });

    it('should return store unchanged if action is undefined', () => {
        const theOriginalStore = buildStoreWithLocale('ar');
        const theNewStore = locale.reducer(theOriginalStore, undefined);
        expect(theNewStore.code).toBe(theOriginalStore.code);
    });
});
