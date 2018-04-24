import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Props, Actions, NavigationButtonsBelowChildComponent } from './navigation_buttons_below_child_component';
import { Store } from '../../application/store';
import * as mainTabs from '../../stores/main_tabs';

const mapStateToProps = (): Props => ({
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): Actions => ({
    goToQuestionnaire: () => dispatch(mainTabs.setCategory(1)),
    goToPlan: () => dispatch(mainTabs.setCategory(2)),
    goToExplore: () => dispatch(mainTabs.setCategory(3)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationButtonsBelowChildComponent);
