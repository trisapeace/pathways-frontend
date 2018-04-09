import * as constants from '../application/constants';
import * as helpers from '../application/helpers/redux-helpers';

// tslint:disable-next-line:typedef
export const setMessage = (message: string) => (
    helpers.makeAction(constants.SET_MESSAGE_TEXT, { message })
);

type MessageAction = Readonly<ReturnType<typeof setMessage>>;
export type Actions = MessageAction;

// tslint:disable-next-line:typedef
const makeStore = (message: string) => (
    { message }
);

export type Store = Readonly<ReturnType<typeof makeStore>>;

export const reducer = (store: Store = makeStore('default text'), action?: Actions): Store => {
    if (!action) {
        return store;
    }
    switch (action.type) {
        case constants.SET_MESSAGE_TEXT:
            return makeStore(action.payload.message);
        default:
            return store;
    }
};
