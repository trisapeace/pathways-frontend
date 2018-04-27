import React from 'react';
import { Container, Header, Content } from 'native-base';
import { withFontLoading } from './with_font_loading';
import * as footer from './footer';

export type Props = footer.Props;
export type Actions = footer.Actions;

const MainComponent: React.StatelessComponent<footer.Props & footer.Actions> = (props: footer.Props & footer.Actions): JSX.Element => {
    return (
        <Container>
            <Header />
            <Content>{props.children}</Content>
            <footer.FooterComponent {...props} />
        </Container >
    );
};

export const Main = withFontLoading(MainComponent);
