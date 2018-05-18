// tslint:disable:no-expression-statement
import { takeLatest, call, put, ForkEffect, CallEffect, PutEffect} from 'redux-saga/effects';

import * as constants from '../application/constants';
import { saveCurrentLocaleCode, setRTLAndReloadIfNeeded, loadCurrentLocaleCode, getLocale } from '../application/locales';
import { SetLocale, LoadCurrentLocale, setLocaleActions, loadCurrentLocaleActions } from '../stores/locale';

export function* watchSetLocale(): IterableIterator<ForkEffect> {
    yield takeLatest(constants.SET_LOCALE_REQUEST, applyLocaleChange);
}

export function* applyLocaleChange(action: SetLocale.Request): IterableIterator<CallEffect | PutEffect<SetLocale.Result>> {
    try {
        yield call(saveCurrentLocaleCode, action.payload.locale.code);
        yield call(setRTLAndReloadIfNeeded, action.payload.locale);
        yield put(setLocaleActions.success(action.payload.locale));
    } catch (e) {
        yield put(setLocaleActions.failure(e.message, action.payload.locale));
    }
}

export function* watchLoadLocale(): IterableIterator<ForkEffect> {
    yield takeLatest(constants.LOAD_CURRENT_LOCALE_REQUEST, loadCurrentLocale);
}

type LoadCurrentLocaleActions = LoadCurrentLocale.Request | LoadCurrentLocale.Result | SetLocale.Request;
export function* loadCurrentLocale(): IterableIterator<CallEffect | PutEffect<LoadCurrentLocaleActions>> {
    try {
        const currentLocaleCode = yield call(loadCurrentLocaleCode);
        const currentLocale = getLocale(currentLocaleCode);
        yield put(loadCurrentLocaleActions.success(currentLocale));
        yield put(setLocaleActions.request(currentLocale));
    } catch (e) {
        console.warn(`Failed to load current locale (${e.message})`);
        yield put(loadCurrentLocaleActions.failure(e.message));
    }
}