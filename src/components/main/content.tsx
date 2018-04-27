import React from 'react';
import { Content } from 'native-base';

export interface Props {
    children?: any
}

export interface Actions {
}

export const ContentComponent: React.StatelessComponent<Props & Actions> = (props: Props & Actions): JSX.Element => (
    <Content>{props.children}</Content>
);
