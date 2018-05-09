// Unfortunately we need to load the Intl polyfill for Android. iOS has Intl
// available natively; we should see it is possibly conditionally load the
// polyfill only when needed.
import 'intl';
import 'intl/locale-data/jsonp/en.js';
import 'intl/locale-data/jsonp/ar.js';

import enMessages from '../../locale/en/messages';
import arMessages from '../../locale/ar/messages';

export const locales: ReadonlyArray<Locale> = [
    { code: 'en', label: 'English', catalog: enMessages },
    { code: 'ar', label: 'Arabic', catalog: arMessages },
];

export const catalogs = buildCatalogsMap(locales);

function buildCatalogsMap(withLocales: ReadonlyArray<Locale>): Catalogs {
    const reducer = (accumulator: Catalogs, locale: Locale): Catalogs => {
        return { ...accumulator, [locale.code]: locale.catalog };
    };
    return withLocales.reduce(reducer, {});
}
