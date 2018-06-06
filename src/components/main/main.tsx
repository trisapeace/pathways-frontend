import React from 'react';
import { Container } from 'native-base';
import * as header from './header';
import * as currentPageSwitcher from './main_page_switcher';
import * as footer from './footer';

export type Props = header.Props & currentPageSwitcher.Props & footer.Props;
export type Actions = header.Actions & currentPageSwitcher.Actions & footer.Actions;

export const Component: React.StatelessComponent<Props & Actions> = (props: Props & Actions): JSX.Element => (
    <Container>
        <header.Component {...props} />
        <currentPageSwitcher.Component {...props} />
        <footer.Component {...props} />
    </Container >
);
