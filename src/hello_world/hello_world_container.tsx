import { Output, TwiceTheOutput, MyButton, Greeting } from './components';
import React from 'react';
import { View, TextInput } from 'react-native';
import * as mainTabs from '../stores/main_tabs';
import * as counter from '../stores/counter';
import * as message from '../stores/message';

export interface Props {
    categoryInProps: mainTabs.Store,
    counterInProps: counter.Store,
    messageInProps: message.Store,
};

export interface Actions {
    increment(store: counter.Store): counter.SetCounterAction;
    decrement(store: counter.Store): counter.SetCounterAction;
    pushUserWithUrl(url: string): void;
    pushUserWithId(id: number): mainTabs.CategoryAction;
    setMessage(newMessage: string): message.MessageAction;
};

export const HelloWorldContainer: React.StatelessComponent<Props & Actions> = (props) => {
    const { categoryInProps, counterInProps, messageInProps, increment, decrement, pushUserWithUrl, pushUserWithId, setMessage } = props;
    return (
        <View style={{ alignItems: 'center' }}>
            <Greeting name='Valeera' />
            <View style={{ flexDirection: 'row', padding: 20 }}>
                <MyButton title='Increment' onPress={() => increment(counterInProps)} />
                <MyButton title='Decrement' onPress={() => decrement(counterInProps)} />
            </View>
            <Output value={counterInProps.value} />
            <TwiceTheOutput value={counterInProps.value} />
            <View>
                <TextInput value={messageInProps.message} onChangeText={(text) => setMessage(text)} />
                <Output value={messageInProps.message} />
                <Output value={categoryInProps.category} />
            </View>
            <View style={{ flexDirection: 'row', padding: 20 }}>
                <MyButton title='Link to 123 with URL' onPress={() => pushUserWithUrl('/user/123')} />
                <MyButton title='Link to 234 with action' onPress={() => pushUserWithId(234)} />
            </View>
        </View >
    );
};
