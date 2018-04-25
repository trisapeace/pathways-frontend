import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedHelloWorld } from '../hello_world/connected_hello_world';
import { ConnectedNavigationBar } from '../components/main_tabs/connected_navigation_bar';
import { store } from './store';
import { ErrorBoundary } from './error_boundary';

export const Application = (): JSX.Element => (
    <ErrorBoundary>
        <Provider store={store}>
            <ConnectedNavigationBar>
                <ConnectedHelloWorld />
            </ConnectedNavigationBar>
        </Provider>
    </ErrorBoundary>
);
