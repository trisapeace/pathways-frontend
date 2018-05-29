// tslint:disable:no-expression-statement
import { call, put } from 'redux-saga/effects';

import { loadCurrentLocaleCode, saveCurrentLocaleCode, getLocale, isReloadNeeded, reloadRTL } from '../../application/locale';
import { loadCurrentLocaleActions, setLocaleActions } from '../../stores/locale';
import { applyLocaleChange, loadCurrentLocale } from '../locale';

describe('the loadCurrentLocale saga', () => {

    const aLocale = getLocale('ar');

    it('should dispatch a call effect with loadCurrentLocaleCode', () => {
        const saga = loadCurrentLocale();
        const value = saga.next().value;
        const expected = call(loadCurrentLocaleCode);
        expect(value).toEqual(expected);
    });

    it('should dispatch a put effect with a success action upon completion of call effect', () => {
        const saga = loadCurrentLocale();
        expect(saga.next().value).toEqual(call(loadCurrentLocaleCode));
        expect(saga.next(aLocale.code).value).toEqual(put(loadCurrentLocaleActions.success(aLocale)));
    });

    it('should dispatch a failure action upon failure of call effect', () => {
        const loadCurrentLocaleError = new Error('[test] Could not load current locale');
        const saga = loadCurrentLocale();
        expect(saga.next().value).toEqual(call(loadCurrentLocaleCode));
        expect(saga.throw(loadCurrentLocaleError).value)
            .toEqual(put(loadCurrentLocaleActions.failure(loadCurrentLocaleError.message)));
    });

});

describe('the applyLocaleChange saga', () => {

    const aLocale = { code: 'ar', label: 'Arabic', catalog: {}, isRTL: true };
    const setLocaleAction = setLocaleActions.request(aLocale);

    it('should dispatch a call effect with saveCurrentLocale', () => {
        const saga = applyLocaleChange(setLocaleAction);
        expect(saga.next().value).toEqual(call(saveCurrentLocaleCode, aLocale.code));
    });

    it('should dispatch a put effect with a success action upon completion of call effect', () => {
        const saga = applyLocaleChange(setLocaleAction);
        expect(saga.next().value).toEqual(call(saveCurrentLocaleCode, aLocale.code));
        expect(saga.next().value).toEqual(put(setLocaleActions.success(aLocale)));
        expect(saga.next().value).toEqual(call(isReloadNeeded, aLocale));
        expect(saga.next(true).value).toEqual(call(reloadRTL, aLocale.isRTL));
    });

    it('should dispatch a failure action upon failure of call effect', () => {
        const saveCurrentLocaleError = new Error('[test] Could not save current locale');
        const saga = applyLocaleChange(setLocaleAction);
        expect(saga.next().value).toEqual(call(saveCurrentLocaleCode, aLocale.code));
        expect(saga.throw(saveCurrentLocaleError).value)
            .toEqual(put(setLocaleActions.failure(saveCurrentLocaleError.message, aLocale)));
    });

});
