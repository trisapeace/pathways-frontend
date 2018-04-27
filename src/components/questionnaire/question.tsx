import React from 'react';
import { Content, Text } from 'native-base';
import * as store from '../../stores/questionnaire';
import { Answer } from './answer';

interface Props {
    question: store.Question,
}

interface Actions {
}

export const Question: React.StatelessComponent<Props & Actions> = (props: Props & Actions): JSX.Element => {
    const { question } = props;
    return <Content>
        <Text>{question.text}</Text>
        <Content>
            {question.answers.map((answer) => {
                return <Answer answer={answer} />
            })}
        </Content>
    </Content>;
};
