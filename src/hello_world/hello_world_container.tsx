import { Output, TwiceTheOutput, MyButton, Greeting } from './components';
import React from 'react';
import { View, TextInput } from 'react-native';
import * as counter from '../stores/counter';
import * as message from '../stores/message';

import { I18n } from '@lingui/core';
import { withI18n } from '@lingui/react';

export interface Props {
    i18n: I18n;
    counterInProps: counter.Store;
    messageInProps: message.Store;
}

export interface Actions {
    increment(store: counter.Store): counter.SetCounterAction;
    decrement(store: counter.Store): counter.SetCounterAction;
    setMessage(newMessage: string): message.MessageAction;
}

export const HelloWorldContainer: React.StatelessComponent<Props & Actions> = withI18n()((props: Props & Actions): JSX.Element => {
    const { i18n, counterInProps, messageInProps, increment, decrement, setMessage }: Props & Actions = props;

    const incText = i18n.t`Increment`;
    const decText = i18n.t`Decrement`;

    return (
        <View style={{ alignItems: 'center' }}>
            <Greeting name='Valeera' />
            <View style={{ flexDirection: 'row', padding: 20 }}>
                <MyButton title={incText} onPress={() => increment(counterInProps)} />
                <MyButton title={decText} onPress={() => decrement(counterInProps)} />
            </View>
            <Output value={counterInProps.value} />
            <TwiceTheOutput value={counterInProps.value} />
            <View>
                <TextInput value={messageInProps.message} onChangeText={(text: string) => setMessage(text)} />
                <Output value={messageInProps.message} />
            </View>
        </View >
    );
});
