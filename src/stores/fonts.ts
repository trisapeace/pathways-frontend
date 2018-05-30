import * as constants from '../application/constants';
import * as helpers from './helpers/make_action';

export namespace LoadFonts {
    export type Request = Readonly<ReturnType<typeof request>>;
    export type Success = Readonly<ReturnType<typeof success>>;
    export type Failure = Readonly<ReturnType<typeof failure>>;
    export type Result = Success | Failure;
}

interface Fonts {
    readonly [name: string]: any; // tslint:disable-line:no-any
}

// tslint:disable-next-line:typedef
export const request = (fonts: Fonts) => {
    return helpers.makeAction(constants.LOAD_FONTS_REQUEST, { fonts });
};

// tslint:disable-next-line:typedef
export function success(fonts: Fonts) {
    return helpers.makeAction(constants.LOAD_FONTS_SUCCESS, { fonts });
}

// tslint:disable-next-line:typedef
export function failure(message: string, fonts: Fonts) {
    return helpers.makeAction(constants.LOAD_FONTS_FAILURE, { message, fonts });
}
