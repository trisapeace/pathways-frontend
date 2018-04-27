import * as constants from '../application/constants';
import * as helpers from '../application/helpers/redux-helpers';

export enum MainPage {
    One, Two, Three,
}

export type Store = Readonly<ReturnType<typeof buildDefaultStore>>;

export type SetMainPageAction = Readonly<ReturnType<typeof setMainPage>>;

// tslint:disable-next-line:typedef
export const setMainPage = (mainPage: MainPage | string) => (
    helpers.makeAction(constants.SET_MAIN_TAB, { mainPage })
);

// tslint:disable-next-line:typedef
const buildDefaultStore = () => (
    { mainPage: MainPage.One }
);

export const reducer = (store: Store = buildDefaultStore(), action?: SetMainPageAction): Store => {
    if (!action) {
        return store;
    }
    switch (action.type) {
        case constants.SET_MAIN_TAB:
            return { ...store, mainPage: validateMainPageId(action.payload.mainPage) };
        default:
            return store;
    }
};

// Using number as a type alias for the MainPage enum, see
// https://stackoverflow.com/questions/29706609/typescript-how-to-add-type-guards-for-enums-in-union-types/29706830#29706830

const validateMainPageId = (pageId: number | string): MainPage => (
    typeof pageId === 'string' ? toMainPageId(pageId) : pageId
);

const toMainPageId = (pageId: string): MainPage => {
    switch (pageId) {
        case 'MainPage.One': return MainPage.One;
        case 'MainPage.Two': return MainPage.Two;
        case 'MainPage.Three': return MainPage.Three;
        default: throw invalidPageIdError(pageId);
    }
};

const invalidPageIdError = (pageId: string): Error => {
    const message = `${pageId}: Invalid main page id, accepted values are MainPage.One, MainPage.Two or MainPage.Three`;
    return new Error(message);
};
