import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Props, Actions, NavigationButtonsBelowChildComponent } from './navigation_buttons_below_child_component';
import { Store } from '../application/store';
import * as category from '../stores/category';

const mapStateToProps = (): Props => ({
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): Actions => ({
    goToQuestionnaire: () => dispatch(category.setCategory(1)),
    goToPlan: () => dispatch(category.setCategory(2)),
    goToExplore: () => dispatch(category.setCategory(3)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationButtonsBelowChildComponent);
