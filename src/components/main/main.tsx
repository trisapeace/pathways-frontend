import React from 'react';
import { Container } from 'native-base';
import * as header from './header';
import * as content from './content';
import * as footer from './footer';

export type Props = content.Props & footer.Props;
export type Actions = content.Actions & footer.Actions;

export const Component: React.StatelessComponent<Props & Actions> = (props: Props & Actions): JSX.Element => (
    <Container>
        <header.Component {...props} />
        <content.Component {...props} />
        <footer.Component {...props} />
    </Container >
);
