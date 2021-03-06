import React from 'react';
import { Content, Text } from 'native-base';
import * as store from '../../stores/page_switcher';
import * as exploreAll from '../explore_all/explore_all';
import * as questionnaire from '../questionnaire';
import * as myPlan from '../my_plan/my_plan';

export interface Props {
    readonly mainPageInProps: store.Page;
}

export interface Actions {
}

export const Component: React.StatelessComponent<Props & Actions> = (props: Props & Actions): JSX.Element => {
    switch (props.mainPageInProps) {
        case store.Page.Questionnaire:
            return <questionnaire.ConnectedComponent />;

        case store.Page.MyPlan:
            return <myPlan.Component />;

        case store.Page.ExploreAll:
            return <exploreAll.Component />;

        default:
            return <Content><Text>Error</Text></Content>;
    }
};
