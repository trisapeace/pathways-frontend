import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Component, Props, renderTask, renderSuggestedTask } from './task_list';
import { Actions } from './task';
import { Store } from '../../application/store';
import { selectTasks, selectSuggestedTasks } from '../../selectors/tasks';
import * as models from '../../stores/tasks';

const mapTasksStateToProps = (store: Store): Props => ({
    tasks: selectTasks(store.applicationState.tasksInStore),
    taskRenderer: renderTask,
});

const mapTasksDispatchToProps = (dispatch: Dispatch<Store>): Actions => ({
    removeFromTaskList: (taskId: models.Id): models.RemoveFromTaskListAction => dispatch(models.removeFromTaskList(taskId)),
    toggleTaskCompleted: (taskId: models.Id): models.ToggleTaskCompletedAction => dispatch(models.toggleTaskCompleted(taskId)),
    toggleTaskStarred: (taskId: models.Id): models.ToggleTaskStarredAction => dispatch(models.toggleTaskStarred(taskId)),
    shareTask: (taskId: models.Id): models.ShareTaskAction => dispatch(models.shareTask(taskId)),
});

const mapSuggestedTasksStateToProps = (store: Store): Props => ({
    tasks: selectSuggestedTasks(store.applicationState.tasksInStore),
    taskRenderer: renderSuggestedTask,
});

const mapSuggestedTasksDispatchToProps = (dispatch: Dispatch<Store>): Actions => ({
    addToTaskList: (task: models.Task): models.AddToTaskListAction => dispatch(models.addToTaskList(task)),
    shareTask: (taskId: models.Id): models.ShareTaskAction => dispatch(models.shareTask(taskId)),
});

export const ConnectedTasks = connect(mapTasksStateToProps, mapTasksDispatchToProps)(Component);
export const ConnectedSuggestedTasks = connect(mapSuggestedTasksStateToProps, mapSuggestedTasksDispatchToProps)(Component);
