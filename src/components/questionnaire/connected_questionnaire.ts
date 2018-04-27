import { connect } from 'react-redux';
import { Store } from '../../application/store';
import { Component, Props, Actions } from './questionnaire';

const mapStateToProps = (store: Store): Props => ({
    questions: store.applicationState.questionnaireInStore,
});

const mapDispatchToProps = (): Actions => ({
});

export const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Component);
