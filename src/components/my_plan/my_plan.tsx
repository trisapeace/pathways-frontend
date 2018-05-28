import React from 'react';
import { Content, Text, Container } from 'native-base';
import * as tasks from '../tasks/index';

export const Component: React.StatelessComponent = (): JSX.Element => (
    <Container>
        <Content>
            <Text>Saved Tasks</Text>
            <tasks.ConnectedSavedTasks />
            <Text>Suggested Tasks</Text>
            <tasks.ConnectedSuggestedTasks />
        </Content>
    </Container>
);
