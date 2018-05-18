// tslint:disable:no-expression-statement
import { takeLatest, call, put, ForkEffect, CallEffect, PutEffect} from 'redux-saga/effects';
import { Font } from 'expo';

import * as constants from '../application/constants';
import  * as loadFontsActions from '../stores/fonts';
import { LoadFonts } from '../stores/fonts';

export function* watchLoadFont(): IterableIterator<ForkEffect> {
    yield takeLatest(constants.LOAD_FONTS_REQUEST, loadFonts);
}

export function* loadFonts(action: LoadFonts.Request): IterableIterator<CallEffect | PutEffect<LoadFonts.Result>> {
    try {
        yield call(Font.loadAsync, action.payload.fonts);
        yield put(loadFontsActions.success(action.payload.fonts));
    } catch (e) {
        yield put(loadFontsActions.failure(e.message, action.payload.fonts));
    }
}