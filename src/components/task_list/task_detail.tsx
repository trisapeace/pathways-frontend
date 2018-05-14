import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { taskDetail as styles } from './styles';
import { Tag } from './tag';

const getColorForTag = (label: string): string => {
    switch (label.toLocaleLowerCase()) {
        case 'important':
            return '#f5a623';
        case 'do soon':
            return '#bd10e0';
        case 'free':
            return '#7dd322';
        default:
            return '#03a9f4';
    }
};

export interface Props {
    id: string;
    title: string;
    description: string;
    category: string;
    importance: number;
    starred: boolean;
    completed: boolean;
    suggested: boolean;
    tags: string[];
}

export interface Actions {
    markTaskAsComplete: () => void;
    shareTask: () => void;
    starTask: () => void;
}

export const TaskDetail: React.StatelessComponent<Props & Actions> = (props: Props & Actions): JSX.Element => (
    <TouchableOpacity onPress={props.starTask}>
        <View style={styles.wrapper}>
            <View style={styles.leftColumn}>
                <Text>{props.starred ? 'Starred' : 'Not starred'}</Text>
            </View>
            <View style={styles.centerColumn}>
                <View style={styles.stackedItems}>
                    <Text>{props.description}</Text>
                    <View style={styles.inlineItems}>
                        {props.tags.map((label: string, index: number) =>
                         <Tag text={label} color={getColorForTag(label)} key={index} />)}
                    </View>
                </View>
            </View>
            <View style={styles.rightColumn}>
                <View style={styles.stackedItems}>
                    <Text>{'...'}</Text>
                    <Text>{props.category}</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
);
