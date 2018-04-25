import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Props, Actions, NavigationBar } from './navigation_bar';
import { Store } from '../../application/store';
import * as store from '../../stores/main_tabs';

const mapStateToProps = (): Props => ({
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): Actions => ({
    goToQuestionnaire: () => dispatch(store.setMainTab(store.MainPage.One)),
    goToPlan: () => dispatch(store.setMainTab(store.MainPage.Two)),
    goToExplore: () => dispatch(store.setMainTab(store.MainPage.Three)),
});

export const ConnectedNavigationBar = connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
