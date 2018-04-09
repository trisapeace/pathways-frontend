import * as constants from '../application/constants';
import * as helpers from '../application/helpers/redux-helpers';

// tslint:disable-next-line:typedef
export const setMessage = (message: string) => (
    helpers.makeAction(constants.SET_MESSAGE_TEXT, { message })
);

type MessageAction = Readonly<ReturnType<typeof setMessage>>;
export type Actions = MessageAction;

// tslint:disable-next-line:typedef
const defaultStore = () => (
    { message: 'default text' }
);

export type Store = Readonly<ReturnType<typeof defaultStore>>;

export const reducer = (store: Store = defaultStore(), action?: Actions): Store => {
    if (!action) {
        return store;
    }
    switch (action.type) {
        case constants.SET_MESSAGE_TEXT:
            return { ...store, message: action.payload.message };
        default:
            return store;
    }
};
