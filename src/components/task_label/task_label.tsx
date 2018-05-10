import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export interface Props {
    color: string;
    text: string;
}

export interface Actions {
}

export const Component: React.StatelessComponent<Props & Actions> = (props: Props & Actions): JSX.Element => (
    <View style={[styles.label, {backgroundColor: props.color}]}>
        <Text style={styles.labelText}>{props.text.toUpperCase()}</Text>
    </View>
);