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

// import { I18nManager } from 'react-native';
// const RTL_LANGS = ['ar'];
// setLang(langCode: string): void {
//     const rtl = langCode in RTL_LANGS;
//     // In theory, I18nManager.forceRTL() will tell all RN & Expo components
//     // to render RTL.
//     // TODO: Determine whether the native bits are needed if we're setting
//     // this manually (https://facebook.github.io/react-native/blog/2016/08/19/right-to-left-support-for-react-native-apps.html#making-an-app-rtl-ready)
//     I18nManager.forceRTL(rtl);
//     // Also store in application state
//     this.setState({langCode: langCode, rtl});
// }