import React from 'react';
import { Text, Button } from 'react-native';

import { Trans } from '@lingui/react';

interface OutputProp {
    readonly value: number | string;
}

export const Output: React.SFC<OutputProp> = ({ value }: OutputProp): JSX.Element => (
    <Text><Trans>The value is {value}</Trans></Text>
);

interface TwiceTheOutputProp {
    readonly value: number;
}

export const TwiceTheOutput: React.SFC<TwiceTheOutputProp> = ({ value }: TwiceTheOutputProp): JSX.Element => {
    const double = 2 * value;
    return (
        <Text><Trans>The double value is {double}</Trans></Text>
    );
};

interface MyButtonProps {
    readonly title: string;
}

interface MyButtonActions {
    readonly onPress: () => void;
}

// https://github.com/jonaskello/tslint-immutable#no-mixed-interface
export const MyButton: React.SFC<MyButtonProps & MyButtonActions> = ({ onPress, title }: MyButtonProps & MyButtonActions): JSX.Element => (
    <Button onPress={onPress} title={title} />
);

interface GreetingProp {
    readonly name: string;
}
export const Greeting: React.SFC<GreetingProp> = ({ name }: GreetingProp): JSX.Element => (
    <Text><Trans>Hello {name}!</Trans></Text>
);
