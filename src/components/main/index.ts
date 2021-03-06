import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { back, canGoBack } from 'redux-first-router';
import { Store } from '../../application/store';
import * as main from './main';
import * as pageSwitcher from '../../stores/page_switcher';
import { withFontLoading } from '../helpers/with_font_loading';
import { withI18n } from '@lingui/react';

const mapStateToProps = (store: Store): main.Props => ({
    mainPageInProps: store.applicationState.mainPageInStore.mainPage,
    canGoBack: canGoBack(),
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): main.Actions => ({
    goToQuestionnaire: (): pageSwitcher.SetMainPageAction => dispatch(pageSwitcher.setMainPage(pageSwitcher.Page.Questionnaire)),
    goToPlan: (): pageSwitcher.SetMainPageAction => dispatch(pageSwitcher.setMainPage(pageSwitcher.Page.MyPlan)),
    goToExplore: (): pageSwitcher.SetMainPageAction => dispatch(pageSwitcher.setMainPage(pageSwitcher.Page.ExploreAll)),
    goBack: (): void => back(),
});

const I18nNavigationBar = withI18n()(withFontLoading(main.Component));
export const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(I18nNavigationBar);
