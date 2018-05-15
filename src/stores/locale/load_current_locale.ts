import * as constants from '../../application/constants';
import * as helpers from '../helpers/make_action';
import { Locale } from '../../components/language_switcher/view_model';

export namespace LoadCurrentLocale {
    export type Request = Readonly<ReturnType<typeof request>>;
    export type Success = Readonly<ReturnType<typeof success>>;
    export type Failure = Readonly<ReturnType<typeof failure>>;
    export type Result = Success | Failure;
}

// tslint:disable-next-line:typedef
export const request = () => {
    return helpers.makeAction(constants.LOAD_CURRENT_LOCALE_REQUEST);
};

// tslint:disable-next-line:typedef
export function success(locale: Locale) {
    return helpers.makeAction(constants.LOAD_CURRENT_LOCALE_SUCCESS, { locale });
}

// tslint:disable-next-line:typedef
export function failure(message: string) {
    return helpers.makeAction(constants.LOAD_CURRENT_LOCALE_FAILURE, { message });
}
