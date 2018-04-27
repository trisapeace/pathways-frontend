import React, { Component } from 'react';
import { Text, Button } from 'react-native';

import { Trans } from '@lingui/react';

interface OutputProp {
    value: number | string;
}

export const Output: React.SFC<OutputProp> = ({ value }: OutputProp): JSX.Element => (
    <Text><Trans>The value is {value}</Trans></Text>
);

interface TwiceTheOutputProp {
    value: number;
}

export const TwiceTheOutput: React.SFC<TwiceTheOutputProp> = ({ value }: TwiceTheOutputProp): JSX.Element => {
    const double = 2 * value;
    return (
        <Text><Trans>The double value is {double}</Trans></Text>
    );
};

interface MyButtonProp {
    onPress: () => void;
    title: string;
}

export const MyButton: React.SFC<MyButtonProp> = ({ onPress, title }: MyButtonProp): JSX.Element => (
    <Button onPress={onPress} title={title} />
);

interface GreetingProp {
    name: string;
}
export const Greeting: React.SFC<GreetingProp> = ({ name }: GreetingProp): JSX.Element => (
    <Text><Trans>Hello {name}!</Trans></Text>
);

interface BlinkProps {
    text: string;
}

interface BlinkState {
    isShowingText: boolean;
}

export class Blink extends Component<BlinkProps, BlinkState> {
    constructor(props: BlinkProps) {
        super(props);
        this.state = { isShowingText: true };
        setInterval(() => {
            this.setState((previousState: BlinkState) => {
                return { isShowingText: !previousState.isShowingText };
            });
        }, 100);
    }

    render(): JSX.Element {
        let display = this.state.isShowingText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}
