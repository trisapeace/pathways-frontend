import React from 'react';
import { View } from 'react-native';
import { Text, Button, Icon } from 'native-base';
import { taskDetail as styles } from './styles';
import { TaskViewModel, taskViewToTask } from '../../selectors/tasks';
import { TaskActions } from './actions';
import { Trans } from '@lingui/react';
import * as models from '../../stores/tasks';

export interface Props {
}

export type Actions = TaskActions;

export const Task: React.StatelessComponent<TaskViewModel & Actions> = (props: TaskViewModel & Actions): JSX.Element => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.sideColumn}>
                {!props.addToTaskList ? undefined : (
                    <Button rounded success onPress={(): models.AddToTaskListAction => props.addToTaskList(taskViewToTask(props))}>
                        <Text><Trans>Add</Trans></Text>
                    </Button>
                )}
            </View>
            <View style={styles.centerColumn}>
                <View style={styles.stackedItems}>
                    <Text><Trans>{props.title}</Trans></Text>
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
};
