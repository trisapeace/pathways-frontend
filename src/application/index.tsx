import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedHelloWorld } from '../components/hello_world/connected_hello_world';
import { ConnectedNavigationBar } from '../components/navigation_bar/connected_navigation_bar';
import { store } from './store';
import { ErrorBoundary } from './error_boundary';

import { I18nProvider } from '@lingui/react';
import enMessages from '../../locale/en/messages';
import csMessages from '../../locale/cs/messages';

const catalog = {en: enMessages, cs: csMessages};

export const Application = (): JSX.Element => (
    <ErrorBoundary>
        <Provider store={store}>
            <I18nProvider language='cs' catalogs={catalog}>
                <ConnectedNavigationBar>
                    <ConnectedHelloWorld />
                </ConnectedNavigationBar>
            </I18nProvider>
        </Provider>
    </ErrorBoundary>
);
