import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { back, canGoBack } from 'redux-first-router';
import { Store } from '../../application/store';
import * as main from './main';
import { LoaderProps, withLoader } from './loader';
import { isApplicationLoading } from '../../selectors/application_loading';
import * as constants from '../../application/constants';
import * as helpers from '../../stores/helpers/make_action';

const mapStateToProps = (store: Store): LoaderProps & main.Props => ({
    loading: isApplicationLoading(store),
    mainPageInProps: store.applicationState.mainPageInStore.mainPage,
    canGoBack: canGoBack(),
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): main.Actions => ({
    goToQuestionnaire: () => dispatch(helpers.makeAction(constants.SET_QUESTIONNAIRE_PAGE)),
    goToPlan: () => dispatch(helpers.makeAction(constants.SET_PLAN_PAGE)),
    goToExplore: () => dispatch(helpers.makeAction(constants.SET_EXPLORE_PAGE)),
    goBack: (): void => back(),
});

type MainComponentProps = main.Props & main.Actions;
const MainComponent = withLoader<MainComponentProps>(main.Component);
const connector = connect(mapStateToProps, mapDispatchToProps);
export const ConnectedComponent = connector(MainComponent);
