import * as constants from '../application/constants';
import * as helpers from './helpers/make_action';

export enum Page {
    Questionnaire = 'questionnaire',
    MyPlan = 'plan',
    ExploreAll = 'explore',
}

export type Store = Readonly<ReturnType<typeof buildDefaultStore>>;

export type SetMainPageAction = Readonly<ReturnType<typeof setMainPage>>;

export const initialPage = Page.Questionnaire;

// tslint:disable-next-line:typedef
export const setMainPage = (mainPage: Page | string) => (
    helpers.makeAction(constants.SET_MAIN_PAGE, { mainPage })
);

// tslint:disable-next-line:typedef
const buildDefaultStore = () => (
    { mainPage: initialPage }
);

export const reducer = (store: Store = buildDefaultStore(), action?: SetMainPageAction): Store => {
    if (!action) {
        return store;
    }
    switch (action.type) {
        case constants.SET_MAIN_PAGE:
            return { ...store, mainPage: getPageFromString(action.payload.mainPage) };
        default:
            return store;
    }
};

const getPageFromString = (pageId: string): Page => {
    switch (pageId) {
        case Page.Questionnaire: return Page.Questionnaire;
        case Page.MyPlan: return Page.MyPlan;
        case Page.ExploreAll: return Page.ExploreAll;
        default: throw invalidPageIdError(pageId);
    }
};

const invalidPageIdError = (pageId: string): Error => {
    const message = `${pageId}: Invalid main page id, accepted values are "questionnaire", "plan", or "explore"`;
    return new Error(message);
};
