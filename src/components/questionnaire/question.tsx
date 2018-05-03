import React from 'react';
import { Button, View, Text } from 'native-base';
import { Answer, Actions } from './answer';
import * as viewModel from './view_model';

export interface Props {
    question: viewModel.Question;
}

export type Actions = viewModel.QuestionnaireActions;

export const Question: React.StatelessComponent<Props & Actions> = (props: Props & Actions): JSX.Element => {
    const { question, selectAnswer }: Props & Actions = props;
    return <View style={{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 1,
        alignItems: 'stretch',
        padding: 10,
    }}>
        <Text>{question.text}</Text>
        {question.answers.map((answer: viewModel.Answer) => (
            <Answer answer={answer} selectAnswer={selectAnswer} />
        ))}
        <View style={{
            padding: 15,
            alignItems: 'center',
        }}>
            <Button rounded dark small>
                <Text>Skip this question</Text>
            </Button>
        </View>
    </View>;
};
