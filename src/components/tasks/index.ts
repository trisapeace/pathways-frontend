import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Component, Props, Actions } from './task_list';
import { Store } from '../../application/store';
import { selectTasks } from '../../selectors/tasks';
import {
    Id,
    AddToTaskListAction,
    addToTaskList,
    RemoveFromTaskListAction,
    removeFromTaskList,
} from '../../stores/tasks';

const mapStateToProps = (store: Store): Props => ({
    tasks: selectTasks(store),
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): Actions => ({
    addToTaskList: (taskId: Id): AddToTaskListAction => dispatch(addToTaskList(taskId)),
    removeFromTaskList: (taskId: Id): RemoveFromTaskListAction => dispatch(removeFromTaskList(taskId)),
});

export const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Component);
