import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { LanguageSwitcher } from './language_switcher';
import { Locale, Props, Actions } from './view_model';
import { Store } from '../../application/store';
import * as store from '../../stores/locale';
import { locales } from '../../application/locales';
import { selectLocale } from './select_locale';

const mapStateToProps = ({ applicationState: { localeInStore } }: Store): Props => ({
    currentLocale: selectLocale(localeInStore),
    locales,
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): Actions => ({
    setLocale: (locale: Locale): store.SetLocale.Request => dispatch(store.setLocaleActions.request(locale)),
});

export const ConnectedLanguageSwitcher = connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher);