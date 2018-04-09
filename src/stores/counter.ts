import * as constants from '../application/constants';

// tslint:disable-next-line:typedef
export const increment = (store: Store) => (
    {
        type: constants.SET_COUNTER as typeof constants.SET_COUNTER,
        payload: {
            value: store.value + 1,
        },
    }
);

type SetCounterAction = Readonly<ReturnType<typeof increment>>;

export const decrement = (store: Store): SetCounterAction => (
    {
        type: constants.SET_COUNTER as typeof constants.SET_COUNTER,
        payload: {
            value: store.value - 1,
        },
    }
);

// tslint:disable-next-line:typedef
export const reset = () => (
    {
        type: constants.RESET_COUNTER as typeof constants.RESET_COUNTER,
    }
);

type ResetCounterAction = Readonly<ReturnType<typeof reset>>;

export type Actions = SetCounterAction | ResetCounterAction;

// tslint:disable-next-line:typedef
const makeStore = (value: number) => (
    { value }
);

export type Store = Readonly<ReturnType<typeof makeStore>>;

export const reducer = (store: Store = makeStore(0), action?: Actions): Store => {
    if (!action) {
        return store;
    }
    switch (action.type) {
        case constants.SET_COUNTER:
            return makeStore(action.payload.value);
        case constants.RESET_COUNTER:
            return makeStore(0);
        default:
            return store;
    }
};
