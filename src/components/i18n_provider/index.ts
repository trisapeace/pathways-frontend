import { connect } from 'react-redux';
import { I18nProvider } from '@lingui/react';
import * as app from '../../application/store';
import { selectLocaleStore, selectLocaleCode } from '../../selectors/locale';
import { CatalogsMap, catalogsMap } from '../../application/locale';

interface Props {
    readonly catalogs: CatalogsMap;
    readonly language: string;
}

interface Actions {}

const mapStateToProps = (appStore: app.Store): Props => ({
    catalogs: catalogsMap,
    language: selectLocaleCode(selectLocaleStore(appStore)),
});

const mapDispatchToProps = (): Actions => ({});

export const ConnectedI18nProvider = connect(mapStateToProps, mapDispatchToProps)(I18nProvider);