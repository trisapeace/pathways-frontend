import React from 'react';
import { Content, View } from 'native-base';
import { Question } from './question';
import * as viewModel from './view_model';

export interface Props {
    allTheQuestions: viewModel.AllTheQuestions;
}

export interface Actions {
}

export const Component: React.StatelessComponent<Props & Actions> = (props: Props & Actions): JSX.Element => {
    return <Content>
        <View style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            flex: 1,
            padding: 10,
        }}>
            {props.allTheQuestions.map((question: viewModel.Question) => {
                return <Question {...question} />;
            })}
        </View>
    </Content>;
};
