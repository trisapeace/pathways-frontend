import { connect } from 'react-redux';
import { Component, Props, Actions } from './questionnaire';
import { Store as ApplicationStore } from '../../application/store';
import { selectAllQuestions } from './view_model';

const mapStateToProps = (applicationStore: ApplicationStore): Props => ({
    allTheQuestions: selectAllQuestions(applicationStore.applicationState.questionnaireInStore),
});

const mapDispatchToProps = (): Actions => ({
});

export const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Component);
