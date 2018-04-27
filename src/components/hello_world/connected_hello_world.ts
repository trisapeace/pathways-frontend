import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Props, Actions, Component } from './hello_world';
import * as reduxFirstRouter from 'redux-first-router';
import * as mainTabs from '../../stores/navigation_bar';
import * as counter from '../../stores/counter';
import * as message from '../../stores/message';
import { Store } from '../../application/store';

import { withI18n } from '@lingui/react';

const mapStateToProps = (store: Store): Props => ({
    navigationBarInProps: store.applicationState.navigationBarInStore,
    counterInProps: store.applicationState.counterInStore,
    messageInProps: store.applicationState.messageInStore,
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): Actions => ({
    increment: (prop: counter.Store): counter.SetCounterAction => dispatch(counter.increment(prop)),
    decrement: (prop: counter.Store): counter.SetCounterAction => dispatch(counter.decrement(prop)),
    pushUserWithId: (id: mainTabs.MainPage): mainTabs.SetMainTabAction => dispatch(mainTabs.setMainTab(id)),
    setMessage: (aMessage: string): message.MessageAction => dispatch(message.setMessage(aMessage)),
    // note the absense of the dispatch call here, seems very wrong
    // https://github.com/faceyspacey/redux-first-router/blob/edad20c402d058a00c1ee2b7f43b92e32a168916/docs/client-only-api.md
    pushUserWithUrl: (url: string): void => reduxFirstRouter.push(url),
    goBack: (): void => reduxFirstRouter.back(),
    goForwards: (): void => reduxFirstRouter.next(),
});

const I18nComponent = withI18n()(Component);
export const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(I18nComponent);
