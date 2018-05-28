import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Component, Props, renderSavedTask, renderSuggestedTask } from './task_list';
import { Actions } from './task';
import { Store } from '../../application/store';
import { selectAllSavedTasks, selectAllSuggestedTasks } from '../../selectors/tasks';
import * as stores from '../../stores/tasks';

const mapSavedTasksStateToProps = (store: Store): Props => ({
    tasks: selectAllSavedTasks(store.applicationState.tasksInStore),
    taskRenderer: renderSavedTask,
});

const mapSavedTasksDispatchToProps = (dispatch: Dispatch<Store>): Actions => ({
    removeFromSavedList: (taskId: stores.Id): stores.RemoveFromSavedListAction => dispatch(stores.removeFromSavedList(taskId)),
    toggleCompleted: (taskUserSettingsId: stores.Id): stores.ToggleCompletedAction => dispatch(stores.toggleCompleted(taskUserSettingsId)),
    toggleStarred: (taskUserSettingsId: stores.Id): stores.ToggleStarredAction => dispatch(stores.toggleStarred(taskUserSettingsId)),
    shareTask: (): stores.ShareAction => dispatch(stores.share()),
});

const mapSuggestedTasksStateToProps = (store: Store): Props => ({
    tasks: selectAllSuggestedTasks(store.applicationState.tasksInStore),
    taskRenderer: renderSuggestedTask,
});

const mapSuggestedTasksDispatchToProps = (dispatch: Dispatch<Store>): Actions => ({
    addToSavedList: (taskId: stores.Id): stores.AddToSavedListAction => dispatch(stores.addToSavedList(taskId)),
    shareTask: (): stores.ShareAction => dispatch(stores.share()),
});

export const ConnectedSavedTasks = connect(mapSavedTasksStateToProps, mapSavedTasksDispatchToProps)(Component);
export const ConnectedSuggestedTasks = connect(mapSuggestedTasksStateToProps, mapSuggestedTasksDispatchToProps)(Component);
