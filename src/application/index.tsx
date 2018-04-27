import React from 'react';
import { Provider } from 'react-redux';
import * as main from '../components/main/connected_main';
import { store } from './store';
import { ErrorBoundary } from './error_boundary';
import { ConnectedI18nProvider } from '../components/language_switcher/connected_i18n_provider';

export const Application = (): JSX.Element => (
    <ErrorBoundary>
        <Provider store={store}>
            <ConnectedI18nProvider>
                <main.ConnectedComponent />
            </ConnectedI18nProvider>
        </Provider>
    </ErrorBoundary>
);
