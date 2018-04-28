import { Output, TwiceTheOutput, MyButton, Greeting } from './components';
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import * as counter from '../stores/counter';
import * as message from '../stores/message';

import { I18n } from '@lingui/core';
import { withI18n, Trans, Plural, DateFormat, NumberFormat } from '@lingui/react';

export interface I18nProps {
    i18n: I18n;
}

export interface Props {
    counterInProps: counter.Store;
    messageInProps: message.Store;
}

export interface Actions {
    increment(store: counter.Store): counter.SetCounterAction;
    decrement(store: counter.Store): counter.SetCounterAction;
    setMessage(newMessage: string): message.MessageAction;
}

export const HelloWorldContainer: React.StatelessComponent<I18nProps & Props & Actions> = withI18n()((props: I18nProps & Props & Actions): JSX.Element => {
    const { i18n, counterInProps, messageInProps, increment, decrement, setMessage }: I18nProps & Props & Actions = props;

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
            <Text>
                <Plural
                    value={counterInProps.value}
                    one='# item'
                    other='# items'
                    _3='There are exactly # items'
                />
            </Text>
            <View>
                <TextInput value={messageInProps.message} onChangeText={(text: string) => setMessage(text)} />
                <Output value={messageInProps.message} />
            </View>
            <Text><Trans>Current date:</Trans> <DateFormat value={Date.now()} /></Text>
            <Text><Trans>Number format:</Trans> <NumberFormat value={counterInProps.value * 1.54} /></Text>
        </View >
    );
});
