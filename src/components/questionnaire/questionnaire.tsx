import React from 'react';
import { Content, View } from 'native-base';
import { Question } from './question';
import * as viewModel from './private';

export interface Props {
    store: viewModel.Store;
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
            {props.store.map((question: viewModel.Question) => {
                return <Question {...question} />;
            })}
        </View>
    </Content>;
};
