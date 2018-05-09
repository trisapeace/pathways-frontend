import React from 'react';
import { Content, View } from 'native-base';
import { Question, Actions } from './question';
import { ConnectedLanguageSwitcher } from '../language_switcher/connected_language_switcher';
import * as selector from '../../selectors/questionnaire';

export interface Props {
    questionnaire: selector.Questionnaire;
}

export type Actions = selector.QuestionnaireActions;

export const Component: React.StatelessComponent<Props & Actions> = (props: Props & Actions): JSX.Element => (
    <Content>
        <ConnectedLanguageSwitcher />
        <View style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            flex: 1,
            padding: 10,
        }}>
            {props.questionnaire.map((question: selector.Question) => (
                <Question key={question.id} question={question} selectAnswer={props.selectAnswer} />
            ))}
        </View>
    </Content>
);
