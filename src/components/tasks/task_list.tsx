import React from 'react';
import { FlatList } from 'react-native';
import { Task } from './task';
import * as selector from '../../selectors/tasks';

export interface Props {
    readonly tasks: ReadonlyArray<selector.Task>;
}

export interface Actions {
//    readonly addToTaskList: () => void;
//    readonly removeFromTaskList: () => void;
}

// tslint:disable-next-line:no-any
const renderTaskDetail = ({item}: any): JSX.Element => {
    return (
        <Task
            id={item.id}
            title={item.title}
            description={item.description}
            category={item.category}
            importance={item.importance}
            starred={item.starred}
            completed={item.completed}
            suggested={item.suggested}
            tags={item.tags}
            markTaskAsComplete={(): void => alert('Marking task as complete')}
            shareTask={(): void => alert('Sharing task')}
            starTask={(): void => alert('Starring task')}
        />
    );
};

// tslint:disable-next-line:no-any
const extractKey = (item: any): string => item.id.toString();

export const Component: React.StatelessComponent<Props & Actions> = (props: Props & Actions): JSX.Element => (
    <FlatList
        data={props.tasks}
        renderItem={renderTaskDetail}
        keyExtractor={extractKey}
    />
);