import React from 'react';
import { FlatList } from 'react-native';
import { Task, TaskDetail } from '../task_detail/task_detail';

interface Props {
    tasks: Task[];
}

interface Actions {
    addToTaskList: () => void;
    removeFromTaskList: () => void;
}

const renderTaskDetail = ({item}: any): JSX.Element => {
    return (
        <TaskDetail
            id={item.id}
            title={item.title}
            description={item.description}
            category={item.category}
            importance={item.importance}
            starred={item.starred}
            completed={item.completed}
            labels={item.labels}
            isFree={item.isFree}
            markTaskAsComplete={(): void => alert('Marking task as complete')}
            shareTask={(): void => alert('Sharing task')}
            starTask={(): void => alert('Starring task')}
        />
    );
};

const extractKey = (item: any): string => item.id.toString();

export const TaskList: React.SFC<Props & Actions> = (props: Props & Actions): JSX.Element => (
    <FlatList
        data={props.tasks}
        renderItem={renderTaskDetail}
        keyExtractor={extractKey}
    />
);