import React from 'react';
import { Content, Text } from 'native-base';
import * as mainPage from '../../stores/main_page';
import * as explore_all from '../explore_all/explore_all';
import * as questionnaire from '../questionnaire/questionnaire';
import * as my_plan from '../my_plan/my_plan';

export interface Props {
    mainPageInProps: mainPage.MainPage,
}

export interface Actions {
}

export const Component: React.StatelessComponent<Props & Actions> = (props: Props & Actions): JSX.Element => {
    switch (props.mainPageInProps) {
        case mainPage.MainPage.One:
            return <questionnaire.Component />;

        case mainPage.MainPage.Two:
            return <my_plan.Component />;

        case mainPage.MainPage.Three:
            return <explore_all.Component />;

        default:
            return <Content><Text>Error</Text></Content>;
    }
};
