import * as constants from '../application/constants';

export type Store = Readonly<ReturnType<typeof buildDefaultStore>>;
export type SetMainTabAction = Readonly<ReturnType<typeof setMainTab>>;

// tslint:disable-next-line:typedef
export const setMainTab = (category: number) => ({
    type: constants.SET_MAIN_TAB,
    payload: {
        category,
    },
});

// tslint:disable-next-line:typedef
const buildDefaultStore = () => (
    { category: 1 }
);

export const reducer = (store: Store = buildDefaultStore(), action?: SetMainTabAction): Store => {
    if (!action) {
        return store;
    }
    switch (action.type) {
        case constants.SET_MAIN_TAB:
            return { ...store, category: action.payload.category };
        default:
            return store;
    }
};
