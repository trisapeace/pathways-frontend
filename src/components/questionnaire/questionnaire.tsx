import React from 'react';
import { Content, View } from 'native-base';
import { Question, Actions } from './question';
import { ConnectedLanguageSwitcher } from '../language_switcher/connected_language_switcher';
import * as viewModel from './view_model';

export interface Props {
    allTheQuestions: viewModel.AllTheQuestions;
}

export type Actions = viewModel.QuestionnaireActions;

export const Component: React.StatelessComponent<Props & Actions> = (props: Props & Actions): JSX.Element => (
    <Content>
        <ConnectedLanguageSwitcher />
        <View style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            flex: 1,
            padding: 10,
        }}>
            {props.allTheQuestions.map((question: viewModel.Question) => (
                <Question key={question.id} question={question} selectAnswer={props.selectAnswer} />
            ))}
        </View>
    </Content>
);
