import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Props, Actions, HelloWorldContainer } from './hello_world_container';
import * as reduxFirstRouter from 'redux-first-router';
import * as mainTabs from '../stores/main_tabs'
import * as counter from '../stores/counter';
import * as message from '../stores/message';
import { Store } from '../application/store';

const mapStateToProps = (store: Store): Props => ({
    categoryInProps: store.appState.categoryInStore,
    counterInProps: store.appState.counterInStore,
    messageInProps: store.appState.messageInStore,
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): Actions => ({
    increment: (prop: counter.Store) => dispatch(counter.increment(prop)),
    decrement: (prop: counter.Store) => dispatch(counter.decrement(prop)),
    // note the absense of the dispatch call here, seems very wrong
    pushUserWithUrl: (url: string) => reduxFirstRouter.push(url),
    pushUserWithId: (id: number) => dispatch(mainTabs.setMainTab(id)),
    setMessage: (aMessage: string) => dispatch(message.setMessage(aMessage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorldContainer);
