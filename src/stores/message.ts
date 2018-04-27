import * as constants from '../application/constants';
import * as helpers from './helpers/make_action';

export type Store = Readonly<ReturnType<typeof buildDefaultStore>>;
export type MessageAction = Readonly<ReturnType<typeof setMessage>>;

// tslint:disable-next-line:typedef
export const setMessage = (message: string) => (
    helpers.makeAction(constants.SET_MESSAGE_TEXT, { message })
);

// tslint:disable-next-line:typedef
const buildDefaultStore = () => (
    { message: 'Default text' }
);

export const reducer = (store: Store = buildDefaultStore(), action?: MessageAction): Store => {
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
