declare class I18n {
    t(message: TemplateStringsArray): string;
}

declare type Catalogs = {[localeCode: string]: object};

declare type Catalog = {[message: string]: object};

declare interface Locale {
    code: string;
    label: string;
    catalog: object;
}

declare interface I18nProps {
    i18n: I18n;
}

