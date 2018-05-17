// tslint:disable:no-expression-statement

import * as loadFontsActions from '../fonts';
import * as constants from '../../application/constants';

const someFonts = {
    MyFont: {},
};

describe('the setLocaleAction for', () => {

    describe('request', () => {

        it('should create action with type LOAD_FONTS_REQUEST', () => {
            const theLoadFontsAction = loadFontsActions.request(someFonts);
            expect(theLoadFontsAction.type).toBe(constants.LOAD_FONTS_REQUEST);
        });

        it('should create action with payload containing the locale', () => {
            const theLoadFontsAction = loadFontsActions.request(someFonts);
            expect(theLoadFontsAction.payload.fonts).toBe(someFonts);
        });

    });

    describe('success', () => {

        it('should create action with type LOAD_FONTS_SUCCESS', () => {
            const theLoadFontsAction = loadFontsActions.success(someFonts);
            expect(theLoadFontsAction.type).toBe(constants.LOAD_FONTS_SUCCESS);
        });

        it('should create action with payload containing the locale', () => {
            const theLoadFontsAction = loadFontsActions.success(someFonts);
            expect(theLoadFontsAction.payload.fonts).toBe(someFonts);
        });

    });

    describe('failure', () => {

        const errorMessage = '[test] Error occurred during loadFonts';

        it('should create action with type LOAD_FONTS_FAILURE', () => {
            const theLoadFontsAction = loadFontsActions.failure(errorMessage, someFonts);
            expect(theLoadFontsAction.type).toBe(constants.LOAD_FONTS_FAILURE);
        });

        it('should create action with payload containing an error message and the fonts', () => {
            const theLoadFontsAction = loadFontsActions.failure(errorMessage, someFonts);
            expect(theLoadFontsAction.payload.message).toBe(errorMessage);
            expect(theLoadFontsAction.payload.fonts).toBe(someFonts);
        });

    });

});