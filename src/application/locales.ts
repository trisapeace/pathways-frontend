import { I18nManager } from 'react-native';
// Unfortunately we need to load the Intl polyfill for Android. iOS has Intl
// available natively; we should see it is possibly conditionally load the
// polyfill only when needed.
import 'intl';
import 'intl/locale-data/jsonp/en.js';
import 'intl/locale-data/jsonp/ar.js';

// TODO: Determine better location for these interfaces.
import { Catalogs, Locale } from '../components/language_switcher/view_model';

import enMessages from '../../locale/en/messages';
import arMessages from '../../locale/ar/messages';

// Tell OS to enable RTL support.
I18nManager.allowRTL(true); // tslint:disable-line:no-expression-statement

export const locales: ReadonlyArray<Locale> = [
    { code: 'en', label: 'English', catalog: enMessages, isRTL: false },
    { code: 'ar', label: 'Arabic', catalog: arMessages, isRTL: true },
];

export function getLocale(code: string): Locale {
    return locales.find((locale: Locale): boolean => locale.code === code);
}

export const catalogs = buildCatalogsMap(locales);

function buildCatalogsMap(withLocales: ReadonlyArray<Locale>): Catalogs {
    const reducer = (accumulator: Catalogs, locale: Locale): Catalogs => {
        return { ...accumulator, [locale.code]: locale.catalog };
    };
    return withLocales.reduce(reducer, {});
}
