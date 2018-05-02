declare class I18n {
    t(message: TemplateStringsArray): string;
}

declare interface I18nProps {
    i18n: I18n;
}
