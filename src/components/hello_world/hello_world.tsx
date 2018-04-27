import { Output, TwiceTheOutput, MyButton, Greeting } from './components';
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import * as pageSwitcher from '../../stores/page_switcher';
import * as counter from '../../stores/counter';
import * as message from '../../stores/message';

import { Trans, Plural, DateFormat, NumberFormat } from '@lingui/react';

export interface Props {
    readonly mainPageInProps: pageSwitcher.Store;
    readonly counterInProps: counter.Store;
    readonly messageInProps: message.Store;
}

export interface Actions {
    increment(store: counter.Store): counter.SetCounterAction;
    decrement(store: counter.Store): counter.SetCounterAction;
    pushUserWithUrl(url: string): void;
    pushUserWithId(id: pageSwitcher.Page): pageSwitcher.SetMainPageAction;
    setMessage(newMessage: string): message.MessageAction;
    goBack(): void;
    goForwards(): void;
}

export const Component: React.StatelessComponent<I18nProps & Props & Actions> = (props: I18nProps & Props & Actions): JSX.Element => {
    const { i18n,
        mainPageInProps, counterInProps, messageInProps, increment, decrement,
        goBack, goForwards,
        pushUserWithUrl, pushUserWithId, setMessage }: I18nProps & Props & Actions = props;

    const incText = i18n.t`Increment`;
    const decText = i18n.t`Decrement`;

    return (
        <View style={{ alignItems: 'center' }}>
            <Greeting name='Valeera' />
            <View style={{ flexDirection: 'row', padding: 20 }}>
                <MyButton title={incText} onPress={(): counter.SetCounterAction => increment(counterInProps)} />
                <MyButton title={decText} onPress={(): counter.SetCounterAction => decrement(counterInProps)} />
            </View>
            <Output value={counterInProps.value} />
            <TwiceTheOutput value={counterInProps.value} />
            <Text>
                <Plural
                    value={counterInProps.value}
                    zero='no (zero) items'
                    one='# (one) item'
                    two='# (two) item'
                    few='# (few) items'
                    many='# (many) items'
                    other='# (other) items'
                    _5='There (#N) are exactly # items'
                />
            </Text>
            <Text><Trans>Current date:</Trans> <DateFormat value={Date.now()} /></Text>
            <Text><Trans>Number format:</Trans> <NumberFormat value={counterInProps.value * 1.54} /></Text>
            <View>
                <TextInput value={messageInProps.message} onChangeText={(text: string): message.MessageAction => setMessage(text)} />
                <Output value={messageInProps.message} />
                <Output value={mainPageInProps.mainPage} />
            </View>
            <View style={{ flexDirection: 'row', padding: 20 }}>
                <MyButton title={i18n.t`To One with URL`} onPress={(): void => pushUserWithUrl('/user/MainPage.One')} />
                <MyButton title={i18n.t`To Two with action`}
                    onPress={(): pageSwitcher.SetMainPageAction => pushUserWithId(pageSwitcher.Page.MyPlan)} />
            </View>
            <View style={{ flexDirection: 'row', padding: 20 }}>
                <MyButton title={i18n.t`back`} onPress={(): void => goBack()} />
                <MyButton title={i18n.t`forward`} onPress={(): void => goForwards()} />
            </View>
        </View >
    );
};
