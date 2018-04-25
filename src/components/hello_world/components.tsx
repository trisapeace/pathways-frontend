import React from 'react';
import { Text, Button } from 'react-native';

interface OutputProp {
    readonly value: number | string;
}

export const Output: React.SFC<OutputProp> = ({ value }: OutputProp): JSX.Element => (
    <Text>The value is {value}</Text>
);

interface TwiceTheOutputProp {
    readonly value: number;
}

export const TwiceTheOutput: React.SFC<TwiceTheOutputProp> = ({ value }: TwiceTheOutputProp): JSX.Element => (
    <Text>The double value is {2 * value}</Text>
);

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
    <Text>Hello {name}!</Text>
);
