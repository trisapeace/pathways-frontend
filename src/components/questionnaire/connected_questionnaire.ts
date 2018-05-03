import { connect } from 'react-redux';
import { Component, Props, Actions } from './questionnaire';
import { Store as ApplicationStore } from '../../application/store';
import { selectQuestionnaire } from './private';

const mapStateToProps = (applicationStore: ApplicationStore): Props => ({
    store: selectQuestionnaire(applicationStore.applicationState.questionnaireInStore),
});

const mapDispatchToProps = (): Actions => ({
});

export const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Component);
