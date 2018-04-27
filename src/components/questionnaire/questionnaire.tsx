import React from 'react';
import { Content } from 'native-base';
import * as store from '../../stores/questionnaire';
import { Question } from './question';

export interface Props {
    questions: store.Store;
}

export interface Actions {
}

export const Component: React.StatelessComponent<Props & Actions> = (props: Props & Actions): JSX.Element => {
    const { questions } = props;
    return <Content>
        {questions.map((question) => {
            return <Question question={question} />
        })}
    </Content>;
};
