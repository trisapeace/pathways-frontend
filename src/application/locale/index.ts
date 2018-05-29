import { I18nManager } from 'react-native';
// Unfortunately we need to load the Intl polyfill for Android. iOS has Intl
// available natively; we should see it is possibly conditionally load the
// polyfill only when needed.
import 'intl';
import 'intl/locale-data/jsonp/en.js';
import 'intl/locale-data/jsonp/ar.js';

import enMessages from '../../../locale/en/messages';
import arMessages from '../../../locale/ar/messages';

import { CatalogsMap, Catalog, Locale } from './types';
import { isReloadNeeded, reloadRTL, saveCurrentLocaleCode, loadCurrentLocaleCode }  from './effects';

// Tell OS to enable RTL support.
I18nManager.allowRTL(true); // tslint:disable-line:no-expression-statement

export { CatalogsMap, Catalog, Locale };
export { isReloadNeeded, reloadRTL, saveCurrentLocaleCode, loadCurrentLocaleCode };

export const locales: ReadonlyArray<Locale> = [
    { code: 'en', label: 'English', catalog: enMessages, isRTL: false },
    { code: 'ar', label: 'Arabic', catalog: arMessages, isRTL: true },
];

export function getLocale(code: string): Locale {
    const locale = locales.find((aLocale: Locale): boolean => aLocale.code === code);
    if (locale === null) {
        throw new Error(`Unknown locale code: ${code}`);
    }
    return locale;
}

export const catalogsMap = buildCatalogsMap(locales);

function buildCatalogsMap(withLocales: ReadonlyArray<Locale>): CatalogsMap {
    const reducer = (accumulator: CatalogsMap, locale: Locale): CatalogsMap => {
        return { ...accumulator, [locale.code]: locale.catalog };
    };
    return withLocales.reduce(reducer, {});
}
