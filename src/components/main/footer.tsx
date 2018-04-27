import React from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

export interface Props {
};

export interface Actions {
    goToQuestionnaire: () => void,
    goToPlan: () => void,
    goToExplore: () => void,
};

export const FooterComponent: React.StatelessComponent<Props & Actions> = (props: Props & Actions): JSX.Element => {
    const { goToQuestionnaire, goToPlan, goToExplore } = props;
    return (
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
    );
}
