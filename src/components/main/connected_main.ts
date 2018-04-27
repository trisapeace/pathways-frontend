import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Store } from '../../application/store';
import * as main from './main';
import * as store from '../../stores/main_page';
import { withFontLoading } from './with_font_loading';

import { withI18n } from '@lingui/react';

const mapStateToProps = (): main.Props => ({});

const mapDispatchToProps = (dispatch: Dispatch<Store>): main.Actions => ({
    goToQuestionnaire: (): store.SetMainPageAction => dispatch(store.setMainPage(store.MainPage.One)),
    goToPlan: (): store.SetMainPageAction => dispatch(store.setMainPage(store.MainPage.Two)),
    goToExplore: (): store.SetMainPageAction => dispatch(store.setMainPage(store.MainPage.Three)),
});

const I18nNavigationBar = withI18n()(withFontLoading(main.Component));
export const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(I18nNavigationBar);
