import React from 'react';
import { FlatList } from 'react-native';
import { Task } from './task';
import { TaskActions } from './actions';
import * as selector from '../../selectors/tasks';

interface TaskRenderer {
    (item: selector.Task, actions: TaskActions): JSX.Element;
}

export interface Props {
    readonly tasks: ReadonlyArray<selector.Task>;
    readonly taskRenderer: TaskRenderer;
}

export interface Actions {
}

const extractKey = (item: selector.Task): string => item.id.toString();

export const Component: React.StatelessComponent<Props & Actions> = (props: Props & Actions): JSX.Element => {
    const renderItem = ({ item }: { readonly item: selector.Task }): JSX.Element => (
       props.taskRenderer(item, props)
    );
    return (
        <FlatList
            data={props.tasks}
            renderItem={renderItem}
            keyExtractor={extractKey}
        />
    );
};

export const renderTask = (item: selector.Task, actions: TaskActions): JSX.Element => {
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

export const renderSuggestedTask = (item: selector.Task, actions: TaskActions): JSX.Element => {
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