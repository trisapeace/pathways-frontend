import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Component, Props, Actions } from './questionnaire';
import { Store as ApplicationStore } from '../../application/store';
import { Id, SelectAnswerAction, selectAnswer } from '../../stores/questionnaire';
import { selectAllQuestions } from './select_all_questions';

const mapStateToProps = (applicationStore: ApplicationStore): Props => ({
    allTheQuestions: selectAllQuestions(applicationStore.applicationState.questionnaireInStore),
});

const mapDispatchToProps = (dispatch: Dispatch<ApplicationStore>): Actions => ({
    selectAnswer: (answerId: Id): SelectAnswerAction => dispatch(selectAnswer(answerId)),
});

export const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Component);
