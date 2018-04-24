import * as constants from '../application/constants';
import * as helpers from '../application/helpers/redux-helpers';

export enum MainPage {
    One, Two, Three
};

export type Store = Readonly<ReturnType<typeof buildDefaultStore>>;
export type SetMainTabAction = Readonly<ReturnType<typeof setMainTab>>;

// tslint:disable-next-line:typedef
export const setMainTab = (mainTab: MainPage) => (
    helpers.makeAction(constants.SET_MAIN_TAB, { mainTab })
);

// tslint:disable-next-line:typedef
const buildDefaultStore = () => (
    { mainTab: MainPage.One }
);

export const reducer = (store: Store = buildDefaultStore(), action?: SetMainTabAction): Store => {
    if (!action) {
        return store;
    }
    switch (action.type) {
        case constants.SET_MAIN_TAB:
            return { ...store, mainTab: action.payload.mainTab };
        default:
            return store;
    }
};
