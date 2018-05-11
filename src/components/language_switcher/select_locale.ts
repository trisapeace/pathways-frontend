import { getLocale } from '../../application/locales';
import * as model from '../../stores/locale';
import * as viewModel from './view_model';

export const selectLocale = (localeStore: model.Store): viewModel.Locale => {
    return getLocale(localeStore.code);
};