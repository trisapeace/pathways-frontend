import React from 'react';
import { Button, Icon, View, Text } from 'native-base';
import * as viewModel from './view_model';
import { SelectAnswerAction } from '../../stores/questionnaire';

export interface Props {
    answer: viewModel.Answer;
}

export type Actions = viewModel.QuestionnaireActions;

export const Answer: React.StatelessComponent<Props & Actions> = (props: Props & Actions): JSX.Element => {
    return props.answer.isSelected ? <SelectedAnswer {...props} /> : <NonSelectedAnswer {...props} />;
};

const NonSelectedAnswer: React.StatelessComponent<Props & Actions> = (props: Props & Actions): JSX.Element => (
    <View style={{ padding: 3 }}>
        <Button rounded block onPress={(): SelectAnswerAction => props.selectAnswer(props.answer.id)}>
            <Text>{props.answer.text}</Text>
        </Button>
    </View>
);

const SelectedAnswer: React.StatelessComponent<Props & Actions> = (props: Props & Actions): JSX.Element => (
    <View style={{ padding: 3 }}>
        <Button rounded block onPress={(): SelectAnswerAction => props.selectAnswer(props.answer.id)}>
            <Text>{props.answer.text}</Text>
            <Icon name='navigate' />
        </Button>
    </View>
);
