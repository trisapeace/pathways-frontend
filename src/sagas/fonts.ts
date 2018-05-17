import { takeLatest, call, put, ForkEffect, CallEffect, PutEffect} from 'redux-saga/effects';
import { Font } from 'expo';

import * as constants from '../application/constants';
import  * as loadFontsActions from '../stores/fonts';
import { LoadFonts } from '../stores/fonts';

export function* watchLoadFont(): IterableIterator<ForkEffect> {
    // tslint:disable-next-line:no-expression-statement
    yield takeLatest(constants.LOAD_FONTS_REQUEST, loadFonts);
}

export function* loadFonts(action: LoadFonts.Request): IterableIterator<CallEffect | PutEffect<LoadFonts.Result>> {
    try {
        // const fonts = {
        //     Roboto: require('native-base/Fonts/Roboto.ttf'),
        //     Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        // };
        // tslint:disable-next-line:no-expression-statement
        yield call(Font.loadAsync, action.payload.fonts);
        // tslint:disable-next-line:no-expression-statement
        yield put(loadFontsActions.success(action.payload.fonts));
    } catch (e) {
        // tslint:disable-next-line:no-expression-statement
        yield put(loadFontsActions.failure(e.message, action.payload.fonts));
    }
}