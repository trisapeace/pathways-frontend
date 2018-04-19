import { Output, TwiceTheOutput, MyButton, Greeting } from './components';
import React from 'react';
import { View, TextInput } from 'react-native';
import * as category from '../stores/category';
import * as counter from '../stores/counter';
import * as message from '../stores/message';

export interface Props {
    categoryInProps: category.Store,
    counterInProps: counter.Store,
    messageInProps: message.Store,
};

export interface Actions {
    increment(store: counter.Store): counter.SetCounterAction;
    decrement(store: counter.Store): counter.SetCounterAction;
    pushUserWithUrl(url: string): void;
    pushUserWithId(id: number): category.CategoryAction;
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
                <MyButton title='User 123' onPress={() => pushUserWithUrl('/user/123')} />
                <MyButton title='User 234' onPress={() => pushUserWithId(234)} />
            </View>
        </View >
    );
};
