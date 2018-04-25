import * as main_tabs from '../main_tabs';
import * as constants from '../../application/constants';
import * as helpers from '../../application/helpers/redux-helpers';

let buildStore = () => main_tabs.reducer(undefined, undefined);

let buildStoreWithValue = (mainTab: main_tabs.MainPage) => {
    const action = helpers.makeAction(constants.SET_MAIN_TAB, { mainTab });
    return main_tabs.reducer(undefined, action);
};

describe('setting the main page', () => {

    it('should create action with type SET_MAIN_TAB', () => {
        const theAction = main_tabs.setMainTab(main_tabs.MainPage.Three);
        expect(theAction.type).toBe(constants.SET_MAIN_TAB);
    });

    it('should create action with page id as passed to the action creator', () => {
        const theAction = main_tabs.setMainTab(main_tabs.MainPage.Three);
        expect(theAction.type).toBe(constants.SET_MAIN_TAB);
        expect(theAction.payload.mainTab).toBe(main_tabs.MainPage.Three);
    });
});

describe('the reducer', () => {
    it('should default to build a store with MainPage.One', () => {
        const theStore = main_tabs.reducer();
        expect(theStore.mainTab).toBe(main_tabs.MainPage.One);
    });

    it('when called with SET_MAIN_TAB should return store with value from action', () => {
        const theStore = buildStore();
        const theAction = {
            type: constants.SET_MAIN_TAB as typeof constants.SET_MAIN_TAB,
            payload: { mainTab: main_tabs.MainPage.Two }
        };
        const theNewStore = main_tabs.reducer(theStore, theAction);
        expect(theNewStore.mainTab).toBe(theAction.payload.mainTab);
    });

    it('should return store unchanged if action is undefined', () => {
        const theOriginalStore = buildStoreWithValue(main_tabs.MainPage.Two);
        const theNewStore = main_tabs.reducer(theOriginalStore, undefined);
        expect(theNewStore.mainTab).toBe(theOriginalStore.mainTab);
    });

    it('should update the store if the payload contains a valid string', () => {
        const theStore = buildStore();
        const mainTabAsString = 'MainPage.Two';
        const theAction = {
            type: constants.SET_MAIN_TAB as typeof constants.SET_MAIN_TAB,
            payload: { mainTab: mainTabAsString }
        };
        const theNewStore = main_tabs.reducer(theStore, theAction);
        expect(theNewStore.mainTab).toBe(main_tabs.MainPage.Two);
    });

    it('should throw if the payload contains an invalid string', () => {
        const theStore = buildStore();
        const invalidMainTabAsString = 'MainPage.Invalid';
        const theAction = {
            type: constants.SET_MAIN_TAB as typeof constants.SET_MAIN_TAB,
            payload: { mainTab: invalidMainTabAsString }
        };
        expect(() => main_tabs.reducer(theStore, theAction)).toThrow(/MainPage.Invalid: Invalid main page id, accepted values are MainPage.One, MainPage.Two or MainPage.Three/);
    });
});
