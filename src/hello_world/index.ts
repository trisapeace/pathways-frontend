import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Props, Actions, helloWorldContainer } from './hello_world_container';
import * as reduxFirstRouter from 'redux-first-router';
import * as mainTabs from '../stores/main_tabs';
import * as counter from '../stores/counter';
import * as message from '../stores/message';
import { Store } from '../application/store';

const mapStateToProps = (store: Store): Props => ({
    mainTabsInProps: store.appState.mainTabsInStore,
    counterInProps: store.appState.counterInStore,
    messageInProps: store.appState.messageInStore,
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): Actions => ({
    increment: (prop: counter.Store): counter.SetCounterAction => dispatch(counter.increment(prop)),
    decrement: (prop: counter.Store): counter.SetCounterAction => dispatch(counter.decrement(prop)),
    pushUserWithId: (id: mainTabs.MainPage): mainTabs.SetMainTabAction => dispatch(mainTabs.setMainTab(id)),
    setMessage: (aMessage: string): message.MessageAction => dispatch(message.setMessage(aMessage)),
    // note the absense of the dispatch call here, seems very wrong
    pushUserWithUrl: (url: string): void => reduxFirstRouter.push(url),
    goBack: (): void => reduxFirstRouter.back(),
    goForwards: (): void => reduxFirstRouter.next(),
});

export default connect(mapStateToProps, mapDispatchToProps)(helloWorldContainer);
