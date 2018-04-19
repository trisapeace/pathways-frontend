import React from 'react';
import { Provider } from 'react-redux';
import Container from '../hello_world';
import { store } from './store';
import { ErrorBoundary } from './error_boundary';


export const Application = () => (
    <ErrorBoundary>
        <Provider store={store}>
            <Container />
        </Provider>
    </ErrorBoundary>
);
