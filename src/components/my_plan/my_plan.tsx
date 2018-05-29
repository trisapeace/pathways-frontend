import React from 'react';
import { Content, Text, Container } from 'native-base';
import { ConnectedSavedTasks } from '../tasks/connected_saved_tasks';
import { ConnectedSuggestedTasks } from '../tasks/connected_suggested_tasks';

export const Component: React.StatelessComponent = (): JSX.Element => (
    <Container>
        <Content>
            <Text>Saved Tasks</Text>
            <ConnectedSavedTasks />
            <Text>Suggested Tasks</Text>
            <ConnectedSuggestedTasks />
        </Content>
    </Container>
);
