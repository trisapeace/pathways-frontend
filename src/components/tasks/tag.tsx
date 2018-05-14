import React from 'react';
import { View, Text } from 'react-native';
import { tag as styles } from './styles';

export interface Props {
    readonly color: string;
    readonly text: string;
}

export interface Actions {
}

export const Tag: React.StatelessComponent<Props & Actions> = (props: Props & Actions): JSX.Element => (
    <View style={[styles.tag, {backgroundColor: props.color}]}>
        <Text style={styles.tagText}>{props.text.toUpperCase()}</Text>
    </View>
);