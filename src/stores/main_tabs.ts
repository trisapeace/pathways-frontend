import * as constants from '../application/constants';
import * as helpers from '../application/helpers/redux-helpers';

export enum MainPage {
    One, Two, Three,
}

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
            return { ...store, mainTab: validateMainPageId(action.payload.mainTab) };
        default:
            return store;
    }
};

// Using number as a type alias for MainPage here,
// https://stackoverflow.com/questions/29706609/typescript-how-to-add-type-guards-for-enums-in-union-types/29706830#29706830

const validateMainPageId = (pageId: number | string): MainPage => {
    if (typeof pageId === 'string') {
        return convertStringToTab(pageId);
    }
    return pageId;
};

const convertStringToTab = (pageId: string): MainPage => {
    switch (pageId) {
        case 'MainPage.One': return MainPage.One;
        case 'MainPage.Two': return MainPage.Two;
        case 'MainPage.Three': return MainPage.Three;
        default: throwValidationError(pageId);
    }
    return MainPage.One;
};

const throwValidationError = (pageId: string): void => {
    const message = `${pageId}: Invalid main page id, accepted values are MainPage.One, MainPage.Two or MainPage.Three`;
    throw new Error(message);
};
