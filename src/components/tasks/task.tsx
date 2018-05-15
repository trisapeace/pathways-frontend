import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { taskDetail as styles } from './styles';
import { Tag } from './tag';
import { TaskViewModel } from '../../selectors/tasks';
import { TasksActions } from './actions';

const getColorForTag = (label: string): string => {
    switch (label.toLowerCase()) {
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
}

export type Actions = TasksActions;

export const Task: React.StatelessComponent<TaskViewModel & Actions> = (props: TaskViewModel & Actions): JSX.Element => (
    <TouchableOpacity>
        <View style={styles.wrapper}>
            <View style={styles.sideColumn}>
                <Text>{props.starred ? 'Starred' : 'Not starred'}</Text>
            </View>
            <View style={styles.centerColumn}>
                <View style={styles.stackedItems}>
                    <Text>{props.title}</Text>
                    <View style={styles.inlineItems}>
                        {props.tags.map((label: string, index: number) =>
                         <Tag text={label} color={getColorForTag(label)} key={index} />)}
                    </View>
                </View>
            </View>
            <View style={styles.sideColumn}>
                <View style={styles.stackedItems}>
                    <Text>{'...'}</Text>
                    <Text>{props.category}</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
);
