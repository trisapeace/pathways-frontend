// tslint:disable:no-expression-statement

import * as pageSwitcher from '../page_switcher';
import * as constants from '../../application/constants';

const buildStore = (): pageSwitcher.Store => (
    pageSwitcher.reducer(undefined, undefined)
);

describe('the initial page', () => {
    it('should be set to Page.Questionnaire', () => {
        expect(pageSwitcher.initialPage).toBe(pageSwitcher.Page.Questionnaire);
    });
});

describe('the reducer', () => {
    it('should default to build a store with Page.Questionnaire', () => {
        const theStore = pageSwitcher.reducer();
        expect(theStore.mainPage).toBe(pageSwitcher.Page.Questionnaire);
    });

    it('when called with SET_QUESTIONNAIRE_PAGE should return store with mainPage = Page.Questionnaire', () => {
        const theStore = buildStore();
        const theAction = {
            type: constants.SET_QUESTIONNAIRE_PAGE as typeof constants.SET_QUESTIONNAIRE_PAGE,
        };
        const theNewStore = pageSwitcher.reducer(theStore, theAction);
        expect(theNewStore.mainPage).toBe(pageSwitcher.Page.Questionnaire);
    });

    it('when called with SET_PLAN_PAGE should return store with mainPage = Page.MyPlan', () => {
        const theStore = buildStore();
        const theAction = {
            type: constants.SET_PLAN_PAGE as typeof constants.SET_PLAN_PAGE,
        };
        const theNewStore = pageSwitcher.reducer(theStore, theAction);
        expect(theNewStore.mainPage).toBe(pageSwitcher.Page.MyPlan);
    });

    it('when called with SET_EXPLORE_PAGE should return store with mainPage = Page.ExploreAll', () => {
        const theStore = buildStore();
        const theAction = {
            type: constants.SET_EXPLORE_PAGE as typeof constants.SET_EXPLORE_PAGE,
        };
        const theNewStore = pageSwitcher.reducer(theStore, theAction);
        expect(theNewStore.mainPage).toBe(pageSwitcher.Page.ExploreAll);
    });

    it('should return store unchanged if action is undefined', () => {
        const theOriginalStore = buildStore();
        const theNewStore = pageSwitcher.reducer(theOriginalStore, undefined);
        expect(theNewStore.mainPage).toBe(theOriginalStore.mainPage);
    });
});
