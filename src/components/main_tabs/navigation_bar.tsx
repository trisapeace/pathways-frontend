import React from "react";
import { View, Button } from 'react-native';

interface TabButtonProp {
    onPress: () => void,
    title: string,
};

const TabButton: React.StatelessComponent<TabButtonProp> = ({ onPress, title }) => (
    <Button onPress={onPress} title={title} />
);

export interface Props {
};

export interface Actions {
    goToQuestionnaire: () => void,
    goToPlan: () => void,
    goToExplore: () => void,
};

export const NavigationBar: React.StatelessComponent<Props & Actions> = (props) => {
    const { goToQuestionnaire, goToPlan, goToExplore } = props;
    return (
        <View style={{ flexDirection: 'column', padding: 20 }}>
            <View>{props.children}</View>
            <View style={{ flexDirection: 'row', padding: 20 }}>
                <TabButton title='Questionnaire' onPress={() => goToQuestionnaire()} />
                <TabButton title='Your plan' onPress={() => goToPlan()} />
                <TabButton title='Explore all' onPress={() => goToExplore()} />
            </View>
        </View>
    );
};
