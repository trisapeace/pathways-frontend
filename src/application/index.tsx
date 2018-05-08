import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedHelloWorld } from '../components/hello_world/connected_hello_world';
import { ConnectedNavigationBar } from '../components/navigation_bar/connected_navigation_bar';
import { store } from './store';
import { ErrorBoundary } from './error_boundary';

import { ConnectedI18nProvider } from '../components/language_switcher/connected_i18n_provider';
import { ConnectedLanguageSwitcher } from '../components/language_switcher/connected_language_switcher';

export const Application = (): JSX.Element => (
    <ErrorBoundary>
        <Provider store={store}>
            <ConnectedI18nProvider>
                <ConnectedNavigationBar>
                    <ConnectedHelloWorld />
                </ConnectedNavigationBar>
                <ConnectedLanguageSwitcher />
            </ConnectedI18nProvider>
        </Provider>
    </ErrorBoundary>
);
