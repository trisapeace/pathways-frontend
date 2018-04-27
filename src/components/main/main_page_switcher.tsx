import React from 'react';
import { Content, Text } from 'native-base';
import * as pageSwitcher from '../../stores/page_switcher';
import * as explore_all from '../explore_all/explore_all';
import * as questionnaire from '../questionnaire/questionnaire';
import * as my_plan from '../my_plan/my_plan';

export interface Props {
    mainPageInProps: pageSwitcher.Page,
}

export interface Actions {
}

export const Component: React.StatelessComponent<Props & Actions> = (props: Props & Actions): JSX.Element => {
    switch (props.mainPageInProps) {
        case pageSwitcher.Page.Questionnaire:
            return <questionnaire.Component />;

        case pageSwitcher.Page.MyPlan:
            return <my_plan.Component />;

        case pageSwitcher.Page.ExploreAll:
            return <explore_all.Component />;

        default:
            return <Content><Text>Error</Text></Content>;
    }
};
