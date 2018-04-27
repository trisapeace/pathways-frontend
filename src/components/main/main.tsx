import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { withFontLoading } from './with_font_loading';

export interface Props {
    children?: any
};

export interface Actions {
    goToQuestionnaire: () => void,
    goToPlan: () => void,
    goToExplore: () => void,
};

const MainComponent: React.StatelessComponent<Props & Actions> = (props: Props & Actions): JSX.Element => {
    const { goToQuestionnaire, goToPlan, goToExplore } = props;
    return (
        <Container>
            <Header />
            <Content>{props.children}</Content>
            <Footer>
                <FooterTab>
                    <Button vertical onPress={() => goToQuestionnaire()}>
                        <Icon name="apps" />
                        <Text>Questionnaire</Text>
                    </Button>
                    <Button vertical onPress={() => goToPlan()}>
                        <Icon name="camera" />
                        <Text>My plan</Text>
                    </Button>
                    <Button vertical onPress={() => goToExplore()}>
                        <Icon active name="navigate" />
                        <Text>Explore</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container >
    )
};

export const Main = withFontLoading(MainComponent);
