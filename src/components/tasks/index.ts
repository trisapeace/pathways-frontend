import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Component, Props, Actions } from './task_list';
import { Store } from '../../application/store';
import { selectTasks } from '../../selectors/tasks';

const mapStateToProps = (store: Store): Props => ({
    tasks: selectTasks(store),
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): Actions => ({
});

export const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Component);
