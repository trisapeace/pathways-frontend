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
    setCategory(prop: category.Store): category.CategoryAction;
    setMessage(newMessage: string): message.MessageAction;
};

export const HelloWorldContainer: React.StatelessComponent<Props & Actions> = (props) => {
    const { categoryInProps, counterInProps, messageInProps, increment, decrement, setCategory, setMessage } = props;
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
                <MyButton title='User 123' onPress={() => setCategory({ category: 123 })} />
                <MyButton title='User 234' onPress={() => setCategory({ category: 234 })} />
                <MyButton title='User 345' onPress={() => setCategory({ category: 345 })} />
            </View>
        </View >
    );
};
