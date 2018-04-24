import React from 'react';
import { Provider } from 'react-redux';
import Container from '../hello_world';
import MainTabsComponent from '../components/main_tabs';
import { store } from './store';
import { ErrorBoundary } from './error_boundary';


export const Application = () => (
    <ErrorBoundary>
        <Provider store={store}>
            <MainTabsComponent>
                <Container />
            </MainTabsComponent>
        </Provider>
    </ErrorBoundary>
);
