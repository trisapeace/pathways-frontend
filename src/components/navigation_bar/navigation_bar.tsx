import React, { ReactNode } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Font } from 'expo';

export interface Props {
    children?: React.ReactChildren;
}

export interface Actions {
    goToQuestionnaire: () => void;
    goToPlan: () => void;
    goToExplore: () => void;
}

interface State {
    loading: boolean;
}

export class NavigationBar extends React.Component<Props & Actions, State> {
    constructor(props: Props & Actions) {
        super(props);
        this.state = {
            loading: true,
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        });
        this.setState({ loading: false });
    }

    render(): ReactNode {
        const { goToQuestionnaire, goToPlan, goToExplore } = this.props;
        if (this.state.loading) {
            return <Text>Loading...</Text>;
        }
        return (
            <Container>
                <Header />
                <Content>{this.props.children}</Content>
                <Footer>
                    <FooterTab>
                        <Button vertical onPress={() => goToQuestionnaire()}>
                            <Icon name="apps" />
                            <Text>Quest</Text>
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
    }
}
