import * as constants from '../application/constants';
import * as helpers from '../application/helpers/redux-helpers';

// tslint:disable-next-line:typedef
export const increment = (store: Store) => (
    helpers.makeAction(constants.SET_COUNTER, { value: store.value + 1 })
);

type SetCounterAction = Readonly<ReturnType<typeof increment>>;

export const decrement = (store: Store): SetCounterAction => (
    helpers.makeAction(constants.SET_COUNTER, { value: store.value - 1 })
);

// tslint:disable-next-line:typedef
export const reset = () => (
    helpers.makeAction(constants.RESET_COUNTER)
);

type ResetCounterAction = Readonly<ReturnType<typeof reset>>;

export type Actions = SetCounterAction | ResetCounterAction;

// tslint:disable-next-line:typedef
const defaultStore = () => (
    { value: 0 }
);

export type Store = Readonly<ReturnType<typeof defaultStore>>;

export const reducer = (store: Store = defaultStore(), action?: Actions): Store => {
    if (!action) {
        return store;
    }
    switch (action.type) {
        case constants.SET_COUNTER:
            return { ...store, value: action.payload.value };
        case constants.RESET_COUNTER:
            return { ...store, value: 0 };
        default:
            return store;
    }
};
