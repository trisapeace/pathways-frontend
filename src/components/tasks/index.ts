import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Component, Props, Actions } from './task_list';
import { Store } from '../../application/store';
import { selectTasks } from '../../selectors/tasks';
import {
    Id,
    Task,
    AddToTaskListAction,
    addToTaskList,
    RemoveFromTaskListAction,
    removeFromTaskList,
} from '../../stores/tasks';

const mapStateToProps = (store: Store): Props => ({
    tasks: selectTasks(store.applicationState.tasksInStore),
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): Actions => ({
    addToTaskList: (task: Task): AddToTaskListAction => dispatch(addToTaskList(task)),
    removeFromTaskList: (taskId: Id): RemoveFromTaskListAction => dispatch(removeFromTaskList(taskId)),
});

export const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Component);
