import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedHelloWorld } from '../components/hello_world/connected_hello_world';
import { ConnectedNavigationBar } from '../components/navigation_bar/connected_navigation_bar';
import { store } from './store';
import { ErrorBoundary } from './error_boundary';

import { I18nManager, Button } from 'react-native';

import { I18nProvider } from '@lingui/react';
import enMessages from '../../locale/en/messages';
import arMessages from '../../locale/ar/messages';

const catalog = {en: enMessages, ar: arMessages};
const RTL_LANGS = ['ar'];

export class Application extends React.Component {

    constructor(props: object) {
        super(props);
        // TODO: Lift component state into Redux.
        I18nManager.forceRTL(false);
        this.state = {
            langCode: 'en',
            rtl: false,
        };
    }

    render (): JSX.Element {
        return (
            <ErrorBoundary>
                <Provider store={store}>
                    <I18nProvider language={this.state.langCode} catalogs={catalog}>
                        <ConnectedNavigationBar>
                            <ConnectedHelloWorld />
                        </ConnectedNavigationBar>
                    </I18nProvider>
                </Provider>
                <Button onPress={(): void => this._setLang('en')} title='English' />
                <Button onPress={(): void => this._setLang('ar')} title='Arabic' />
            </ErrorBoundary>
        );
    }

    _setLang(langCode: string): void {
        const rtl = langCode in RTL_LANGS;
        // In theory, I18nManager.forceRTL() will tell all RN & Expo components
        // to render RTL.
        // TODO: Determine whether the native bits are needed if we're setting
        // this manually (https://facebook.github.io/react-native/blog/2016/08/19/right-to-left-support-for-react-native-apps.html#making-an-app-rtl-ready)
        I18nManager.forceRTL(rtl);
        // Also store in application state
        this.setState({langCode: langCode, rtl});
    }

}
