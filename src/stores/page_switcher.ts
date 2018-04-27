import * as constants from '../application/constants';
import * as helpers from './helpers/make_action';

export enum Page {
    Questionnaire, MyPlan, ExploreAll,
}

export type Store = Readonly<ReturnType<typeof buildDefaultStore>>;

export type SetMainPageAction = Readonly<ReturnType<typeof setMainPage>>;

// tslint:disable-next-line:typedef
export const setMainPage = (mainPage: Page | string) => (
    helpers.makeAction(constants.SET_MAIN_TAB, { mainPage })
);

// tslint:disable-next-line:typedef
const buildDefaultStore = () => (
    { mainPage: Page.Questionnaire }
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

const validateMainPageId = (pageId: number | string): Page => (
    typeof pageId === 'string' ? toMainPageId(pageId) : pageId
);

const toMainPageId = (pageId: string): Page => {
    switch (pageId) {
        case 'Page.Questionnaire': return Page.Questionnaire;
        case 'Page.MyPlan': return Page.MyPlan;
        case 'Page.ExploreAll': return Page.ExploreAll;
        default: throw invalidPageIdError(pageId);
    }
};

const invalidPageIdError = (pageId: string): Error => {
    const message = `${pageId}: Invalid main page id, accepted values are Page.Questionnaire, Page.MyPlan or Page.ExploreAll`;
    return new Error(message);
};
