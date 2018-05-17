import React from 'react';
import { View } from 'react-native';
import { Text, Button, Icon } from 'native-base';
import { taskDetail as styles } from './styles';
import { TaskViewModel } from '../../selectors/tasks';
import { TasksActions } from './actions';

export interface Props {
}

export type Actions = TasksActions;

export const Task: React.StatelessComponent<TaskViewModel & Actions> = (props: TaskViewModel & Actions): JSX.Element => (
    <View style={styles.wrapper}>
        <View style={styles.sideColumn}>
            <Button rounded success>
                <Text>Add</Text>
            </Button>
        </View>
        <View style={styles.centerColumn}>
            <View style={styles.stackedItems}>
                <Text>{props.title}</Text>
                {/*
                <View style={styles.inlineItems}>
                    {props.tags.map((label: string, index: number) =>
                        <Tag text={label} color={getColorForTag(label)} key={index} />)}
                </View>
                */}
            </View>
        </View>
        <View style={styles.sideColumn}>
            <View style={styles.stackedItems}>
                <Button>
                    <Icon name='arrow-forward' />
                </Button>
            </View>
        </View>
    </View>
);
