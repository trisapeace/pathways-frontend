import React from 'react';
import { FlatList } from 'react-native';
import { Task } from './task';
import { TaskActions } from './actions';
import * as selector from '../../selectors/tasks';

interface TaskRenderer {
    // tslint:disable-next-line:no-any
    (item: any, actions: TaskActions): JSX.Element;
}

export interface Props {
    readonly tasks: ReadonlyArray<selector.Task>;
    readonly taskRenderer: TaskRenderer;
}

export interface Actions {
}

// tslint:disable-next-line:no-any
const extractKey = (item: any): string => item.id.toString();

export const Component: React.StatelessComponent<Props & Actions> = (props: Props & Actions): JSX.Element => (
    <FlatList
        data={props.tasks}
        // tslint:disable-next-line:no-any
        renderItem={({ item }: any): JSX.Element => props.taskRenderer(item, props)}
        keyExtractor={extractKey}
    />
);

// tslint:disable-next-line:no-any
export const renderTask = (item: any, actions: TaskActions): JSX.Element => {
    return (
        <Task
            id={item.id}
            taskDefinitionId={item.taskDefinitionId}
            title={item.title}
            description={item.description}
            category={item.category}
            importance={item.importance}
            starred={item.starred}
            completed={item.completed}
            suggested={item.suggested}
            tags={item.tags}
            removeFromTaskList={actions.removeFromTaskList}
            toggleTaskCompleted={actions.toggleTaskCompleted}
            toggleTaskStarred={actions.toggleTaskStarred}
            shareTask={actions.shareTask}
        />
    );
};

// tslint:disable-next-line:no-any
export const renderSuggestedTask = (item: any, actions: TaskActions): JSX.Element => {
    return (
        <Task
            id={item.id}
            taskDefinitionId={item.taskDefinitionId}
            title={item.title}
            description={item.description}
            category={item.category}
            importance={item.importance}
            starred={item.starred}
            completed={item.completed}
            suggested={item.suggested}
            tags={item.tags}
            addToTaskList={actions.addToTaskList}
            shareTask={actions.shareTask}
        />
    );
};