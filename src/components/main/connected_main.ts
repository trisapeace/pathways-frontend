import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Props, Actions, Main } from './main';
import { Store } from '../../application/store';
import * as store from '../../stores/navigation_bar';
import { withFontLoading } from './with_font_loading';

import { withI18n } from '@lingui/react';

const mapStateToProps = (): Props => ({});

const mapDispatchToProps = (dispatch: Dispatch<Store>): Actions => ({
    goToQuestionnaire: (): store.SetMainTabAction => dispatch(store.setMainTab(store.MainPage.One)),
    goToPlan: (): store.SetMainTabAction => dispatch(store.setMainTab(store.MainPage.Two)),
    goToExplore: (): store.SetMainTabAction => dispatch(store.setMainTab(store.MainPage.Three)),
});

const I18nNavigationBar = withI18n()(withFontLoading(Main);
export const ConnectedMain = connect(mapStateToProps, mapDispatchToProps)(I18nNavigationBar);
