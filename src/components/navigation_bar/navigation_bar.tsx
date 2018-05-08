import React from 'react';
import { View, Button } from 'react-native';

interface TabButtonProp {
    onPress: () => void;
    title: string;
}

const TabButton: React.StatelessComponent<TabButtonProp> = ({ onPress, title }: TabButtonProp): JSX.Element => (
    <Button onPress={onPress} title={title} />
);

export interface Props {
    children?: React.ReactChildren;
}

export interface Actions {
    goToQuestionnaire: () => void;
    goToPlan: () => void;
    goToExplore: () => void;
}

type NavigationBarProps = I18nProps & Props & Actions;

export const NavigationBar: React.StatelessComponent<NavigationBarProps> = (props: NavigationBarProps): JSX.Element => {
    const { i18n, goToQuestionnaire, goToPlan, goToExplore }: NavigationBarProps = props;
    return (
        <View style={{ flexDirection: 'column', padding: 20 }}>
            <View>{props.children}</View>
            <View style={{ flexDirection: 'row', padding: 20 }}>
                <TabButton title={i18n.t`Questionnaire`} onPress={(): void => goToQuestionnaire()} />
                <TabButton title={i18n.t`Your plan`} onPress={(): void => goToPlan()} />
                <TabButton title={i18n.t`Explore all`} onPress={(): void => goToExplore()} />
            </View>
        </View>
    );
};
