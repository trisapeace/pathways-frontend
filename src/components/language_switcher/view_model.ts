export type Catalogs = {readonly [localeCode: string]: object};

export type Catalog = {readonly [message: string]: object};

export interface Locale {
    readonly code: string;
    readonly label: string;
    readonly catalog: object;
    readonly isRTL: boolean;
}

export interface Props {
    readonly currentLocale: Locale;
    readonly locales: ReadonlyArray<Locale>;
}

export interface Actions {
    setLocale(locale: Locale): void;
}

export type LanguageSwitcherProps = I18nProps & Props & Actions;