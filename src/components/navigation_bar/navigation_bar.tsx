import React from 'react';
import { View, Button } from 'react-native';

import { I18n } from '@lingui/core';
import { withI18n } from '@lingui/react';

interface TabButtonProp {
    onPress: () => void;
    title: string;
}

const TabButton: React.StatelessComponent<TabButtonProp> = ({ onPress, title }: TabButtonProp): JSX.Element => (
    <Button onPress={onPress} title={title} />
);

export interface I18nProps {
    i18n: I18n;
}

export interface Props {
}

export interface Actions {
    goToQuestionnaire: () => void;
    goToPlan: () => void;
    goToExplore: () => void;
}

export const NavigationBar: React.StatelessComponent<I18nProps & Props & Actions> = withI18n()((props: I18nProps & Props & Actions): JSX.Element => {
    const { i18n, goToQuestionnaire, goToPlan, goToExplore }: I18nProps & Props & Actions = props;
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
});
