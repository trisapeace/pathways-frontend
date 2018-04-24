import React from 'react';
import { Provider } from 'react-redux';
import Container from '../hello_world';
import NavigationButtons from '../tabs';
import { store } from './store';
import { ErrorBoundary } from './error_boundary';


export const Application = () => (
    <ErrorBoundary>
        <Provider store={store}>
            <NavigationButtons>
                <Container />
            </NavigationButtons>
        </Provider>
    </ErrorBoundary>
);
