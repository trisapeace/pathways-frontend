import React from 'react';
import { Content, Text } from 'native-base';
import * as tasks from '../tasks/index';

export const Component: React.StatelessComponent = (): JSX.Element => (
    <Content>
        <Text>My plan</Text>
        <tasks.ConnectedComponent />
    </Content>
);
