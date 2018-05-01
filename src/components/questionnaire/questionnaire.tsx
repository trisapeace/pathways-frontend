import React from 'react';
import { Button, Content, Icon, View, Text } from 'native-base';
import * as store from '../../stores/questionnaire';

export interface Props {
    questions: store.Store;
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
            {props.questions.map((question: store.Question) => {
                return <QuestionComponent {...question} />;
            })}
        </View>
    </Content>;
};

export const QuestionComponent: React.StatelessComponent<store.Question> = (question: store.Question): JSX.Element => {
    return <View style={{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 1,
        alignItems: 'stretch',
        padding: 10,
    }}>
        <Text>{question.text}</Text>
        {
            question.answers.map((answer: store.Answer) => {
                return <AnswerComponent {...answer} />;
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

export const AnswerComponent: React.StatelessComponent<store.Answer> = (answer: store.Answer): JSX.Element => {
    return <View style={{ padding: 3 }}>
        <Button rounded block>
            <Text>{answer.text}</Text>
            <Icon name='navigate' />
        </Button>
    </View>;
};
