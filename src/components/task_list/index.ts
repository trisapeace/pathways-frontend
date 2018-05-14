import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Component, Props, Actions } from './task_list';
import { Store } from '../../application/store';
//import { Id, SelectAnswerAction, selectAnswer } from '../../stores/questionnaire';
//import { selectAllQuestions } from './select_all_questions';

const mapStateToProps = (store: Store): Props => ({
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): Actions => ({
});

export const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Component);
