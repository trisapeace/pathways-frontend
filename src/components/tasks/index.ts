import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Component, Props, renderTask, renderSuggestedTask } from './task_list';
import { Actions } from './task';
import { Store } from '../../application/store';
import { selectTasks, selectSuggestedTasks } from '../../selectors/tasks';
import * as stores from '../../stores/tasks';

const mapTasksStateToProps = (store: Store): Props => ({
    tasks: selectTasks(store.applicationState.tasksInStore),
    taskRenderer: renderTask,
});

const mapTasksDispatchToProps = (dispatch: Dispatch<Store>): Actions => ({
    removeFromTaskList: (taskId: stores.Id): stores.RemoveFromTaskListAction => dispatch(stores.removeFromTaskList(taskId)),
    toggleTaskCompleted: (taskId: stores.Id): stores.ToggleTaskCompletedAction => dispatch(stores.toggleTaskCompleted(taskId)),
    toggleTaskStarred: (taskId: stores.Id): stores.ToggleTaskStarredAction => dispatch(stores.toggleTaskStarred(taskId)),
    shareTask: (taskId: stores.Id): stores.ShareTaskAction => dispatch(stores.shareTask(taskId)),
});

const mapSuggestedTasksStateToProps = (store: Store): Props => ({
    tasks: selectSuggestedTasks(store.applicationState.tasksInStore),
    taskRenderer: renderSuggestedTask,
});

const mapSuggestedTasksDispatchToProps = (dispatch: Dispatch<Store>): Actions => ({
    addToTaskList: (task: stores.Task): stores.AddToTaskListAction => dispatch(stores.addToTaskList(task)),
    shareTask: (taskId: stores.Id): stores.ShareTaskAction => dispatch(stores.shareTask(taskId)),
});

export const ConnectedTasks = connect(mapTasksStateToProps, mapTasksDispatchToProps)(Component);
export const ConnectedSuggestedTasks = connect(mapSuggestedTasksStateToProps, mapSuggestedTasksDispatchToProps)(Component);
