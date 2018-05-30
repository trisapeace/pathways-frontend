// tslint:disable:readonly-keyword
// tslint:disable:no-this
// tslint:disable:no-expression-statement
// tslint:disable:readonly-array
// tslint:disable:no-class
import { Catalog, Locale } from '../../../application/locale';
import { aString, aBoolean } from '../../../application/__tests__/helpers/random_test_values';

export function buildLocale(): LocaleBuilder {
    return new LocaleBuilder();
}

class LocaleBuilder {
    code: string = aString();
    label: string = aString();
    catalog: Catalog = {};
    isRTL: boolean = aBoolean();

    withCode(code: string): LocaleBuilder {
        this.code = code;
        return this;
    }

    withLabel(label: string): LocaleBuilder {
        this.label = label;
        return this;
    }

    withCatalog(catalog: Catalog): LocaleBuilder {
        this.catalog = catalog;
        return this;
    }

    withRTL(isRTL: boolean): LocaleBuilder {
        this.isRTL = isRTL;
        return this;
    }

    get(): Locale {
        return {
            code: this.code,
            label: this.label,
            catalog: this.catalog,
            isRTL: this.isRTL,
        };
    }
}
