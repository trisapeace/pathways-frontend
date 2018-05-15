import { takeLatest, call, put, ForkEffect, CallEffect, PutEffect} from 'redux-saga/effects';

import * as constants from '../application/constants';
import { saveCurrentLocaleCode, setRTLAndReloadIfNeeded, loadCurrentLocaleCode, getLocale } from '../application/locales';
import { SetLocale, LoadCurrentLocale, setLocaleActions, loadCurrentLocaleActions } from '../stores/locale';

export function* watchSetLocale(): IterableIterator<ForkEffect> {
    // tslint:disable-next-line:no-expression-statement
    yield takeLatest(constants.SET_LOCALE_REQUEST, applyLocaleChange);
}

function* applyLocaleChange(action: SetLocale.Request): IterableIterator<CallEffect | PutEffect<SetLocale.Result>> {
    try {
        // tslint:disable-next-line:no-expression-statement
        yield call(saveCurrentLocaleCode, action.payload.locale.code);
        // tslint:disable-next-line:no-expression-statement
        yield call(setRTLAndReloadIfNeeded, action.payload.locale);
        // tslint:disable-next-line:no-expression-statement
        yield put(setLocaleActions.success(action.payload.locale));
    } catch (e) {
        // tslint:disable-next-line:no-expression-statement
        yield put(setLocaleActions.failure(e.message, action.payload.locale));
    }
}

export function* watchLoadLocale(): IterableIterator<ForkEffect> {
    // tslint:disable-next-line:no-expression-statement
    yield takeLatest(constants.LOAD_CURRENT_LOCALE_REQUEST, loadLocale);
}

function* loadLocale(): IterableIterator<CallEffect | PutEffect<LoadCurrentLocale.Request | LoadCurrentLocale.Result | SetLocale.Request>> {
    try {
        const currentLocaleCode = yield call(loadCurrentLocaleCode);
        const currentLocale = getLocale(currentLocaleCode);
        // tslint:disable-next-line:no-expression-statement
        yield put(loadCurrentLocaleActions.success(currentLocale));
        // tslint:disable-next-line:no-expression-statement
        yield put(setLocaleActions.request(currentLocale));
    } catch (e) {
        // tslint:disable-next-line:no-expression-statement
        yield put(loadCurrentLocaleActions.failure(e.message));
    }
}