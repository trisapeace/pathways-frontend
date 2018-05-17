import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Component, Props } from './task_list';
import { Actions } from './task';
import { Store } from '../../application/store';
import { selectTasks } from '../../selectors/tasks';
import * as models from '../../stores/tasks';

const mapStateToProps = (store: Store): Props => ({
    tasks: selectTasks(store.applicationState.tasksInStore),
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): Actions => ({
    addToTaskList: (task: models.Task): models.AddToTaskListAction => dispatch(models.addToTaskList(task)),
    removeFromTaskList: (taskId: models.Id): models.RemoveFromTaskListAction => dispatch(models.removeFromTaskList(taskId)),
    toggleTaskCompleted: (taskId: models.Id): models.ToggleTaskCompletedAction => dispatch(models.toggleTaskCompleted(taskId)),
    toggleTaskStarred: (taskId: models.Id): models.ToggleTaskStarredAction => dispatch(models.toggleTaskStarred(taskId)),
    shareTask: (taskId: models.Id): models.ShareTaskAction => dispatch(models.shareTask(taskId)),
});

export const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Component);
