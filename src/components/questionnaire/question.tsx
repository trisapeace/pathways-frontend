import React from 'react';
import { Button, View, Text } from 'native-base';
import { Answer } from './answer';
import * as viewModel from './view_model';

export const Question: React.StatelessComponent<viewModel.Question> = (question: viewModel.Question): JSX.Element => {
    return <View style={{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 1,
        alignItems: 'stretch',
        padding: 10,
    }}>
        <Text>{question.text}</Text>
        {
            question.answers.map((answer: viewModel.Answer) => {
                return <Answer {...answer} />;
            })
        }
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
