import { I18nManager, AsyncStorage } from 'react-native';
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
    const locale = locales.find((aLocale: Locale): boolean => aLocale.code === code);
    if (locale === null) {
        throw new Error(`Unknown locale code: ${code}`);
    }
    return locale;
}

export const catalogs = buildCatalogsMap(locales);

function buildCatalogsMap(withLocales: ReadonlyArray<Locale>): Catalogs {
    const reducer = (accumulator: Catalogs, locale: Locale): Catalogs => {
        return { ...accumulator, [locale.code]: locale.catalog };
    };
    return withLocales.reduce(reducer, {});
}

export async function saveCurrentLocaleCode(code: string): Promise<boolean> {
    // tslint:disable-next-line:no-expression-statement
    await AsyncStorage.setItem('@I18N:CURRENT_LOCALE_CODE', code);
    return true;
}

export async function loadCurrentLocaleCode(): Promise<Locale> {
    const localeCode = await AsyncStorage.getItem('@I18N:CURRENT_LOCALE_CODE');
    if (localeCode === null) {
        throw new Error('No current locale found');
    }
    return getLocale(localeCode);
}

/**
 * I18nManager.forceRTL() requires application to be restarted for changes to
 * take effect. To ensure that we load correct locale upon application restart,
 * this needs to be called *after* desired locale has been persisted to storage.
 */
export function reloadIfNeeded(locale: Locale): boolean {
    const reload = I18nManager.isRTL !== locale.isRTL;
    if (reload) {
        I18nManager.forceRTL(locale.isRTL); // tslint:disable-line:no-expression-statement
        Expo.Util.reload(true); // tslint:disable-line:no-expression-statement
    }
    return reload;
}