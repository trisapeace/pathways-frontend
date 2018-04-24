import { Output, TwiceTheOutput, MyButton, Greeting } from './components';
import { MainPage } from '../stores/main_tabs';
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
    pushUserWithId(id: MainPage): mainTabs.SetMainTabAction;
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
                <Output value={categoryInProps.mainTab} />
            </View>
            <View style={{ flexDirection: 'row', padding: 20 }}>
                <MyButton title='To One with URL' onPress={() => pushUserWithUrl('/user/MainPage.One')} />
                <MyButton title='To Two with action' onPress={() => pushUserWithId(MainPage.Two)} />
            </View>
        </View >
    );
};
