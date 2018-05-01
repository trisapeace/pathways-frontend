import React from 'react';
import { Text } from 'native-base';
import * as store from '../../stores/questionnaire';

export interface Props {
    answer: store.Answer,
}

export interface Actions {
}

export const Answer: React.StatelessComponent<Props & Actions> = (props: Props & Actions): JSX.Element => {
    const { answer } = props;
    return <Text>{answer.text}</Text>
};
