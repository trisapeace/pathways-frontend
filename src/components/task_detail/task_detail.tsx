import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { TaskLabel } from '../task_label/task_label';

export interface Task {
    id: string;
    title: string;
    description: string;
    category: string;
    importance: string;
    starred: boolean;
    completed: boolean;
    labels: string[];
    isFree: boolean;
}

interface Actions {
    markTaskAsComplete: () => void;
    shareTask: () => void;
    starTask: () => void;
}

const getColorForLabel = (label: string): string => {
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

export const TaskDetail: React.SFC<Task & Actions> = (props: Task & Actions): JSX.Element => (
    <TouchableOpacity onPress={props.starTask}>
        <View style={styles.wrapper}>
            <View style={styles.leftColumn}>
                <Text>{props.starred ? 'Starred' : 'Not starred'}</Text>
            </View>
            <View style={styles.centerColumn}>
                <View style={styles.stackedItems}>
                    <Text>{props.description}</Text>
                    <View style={styles.inlineItems}>
                        {props.labels.map((label: string, index: number) =>
                         <TaskLabel text={label} color={getColorForLabel(label)} key={index} />)}
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
