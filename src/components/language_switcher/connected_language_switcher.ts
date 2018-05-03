import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { LanguageSwitcher, Props, Actions } from './language_switcher';
import { Store } from '../../application/store';
import * as store from '../../stores/locale';
import { locales } from '../../application/locales';

const mapStateToProps = ({ applicationState: { localeInStore } }: Store): Props => ({
    currentLocale: localeInStore.code,
    locales,
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): Actions => ({
    setLocale: (localeCode: string): store.SetLocaleAction => dispatch(store.setLocale(localeCode)),
});

export const ConnectedLanguageSwitcher = connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher);