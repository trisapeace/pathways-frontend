import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Store } from '../../application/store';
import * as main from './main';
import * as mainPageStore from '../../stores/main_page';
import { withFontLoading } from '../helpers/with_font_loading';

import { withI18n } from '@lingui/react';

const mapStateToProps = (): main.Props => ({});

const mapDispatchToProps = (dispatch: Dispatch<Store>): main.Actions => ({
    goToQuestionnaire: (): mainPageStore.SetMainPageAction => dispatch(mainPageStore.setMainPage(mainPageStore.MainPage.One)),
    goToPlan: (): mainPageStore.SetMainPageAction => dispatch(mainPageStore.setMainPage(mainPageStore.MainPage.Two)),
    goToExplore: (): mainPageStore.SetMainPageAction => dispatch(mainPageStore.setMainPage(mainPageStore.MainPage.Three)),
});

const I18nNavigationBar = withI18n()(withFontLoading(main.Component));
export const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(I18nNavigationBar);
