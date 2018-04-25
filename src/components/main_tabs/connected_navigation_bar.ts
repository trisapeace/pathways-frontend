import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Props, Actions, NavigationBar } from './navigation_bar';
import { Store } from '../../application/store';
import * as mainTabs from '../../stores/main_tabs';

const mapStateToProps = (): Props => ({
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): Actions => ({
    goToQuestionnaire: () => dispatch(mainTabs.setMainTab(mainTabs.MainPage.One)),
    goToPlan: () => dispatch(mainTabs.setMainTab(mainTabs.MainPage.Two)),
    goToExplore: () => dispatch(mainTabs.setMainTab(mainTabs.MainPage.Three)),
});

export const ConnectedNavigationBar = connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
