// tslint:disable-next-line:no-class
declare class I18n {
    t(message: TemplateStringsArray): string;
}

declare type Catalogs = {
    readonly [localeCode: string]: object,
};

declare type Catalog = {
    readonly [message: string]: object,
};

declare interface Locale {
    readonly code: string;
    readonly label: string;
    readonly catalog: object;
}

declare interface I18nProps {
    readonly i18n: I18n;
}
