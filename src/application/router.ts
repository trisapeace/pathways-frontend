import { Reducer, GenericStoreEnhancer, Middleware } from 'redux';
import  { LocationState } from 'redux-first-router';
import * as reduxFirstRouter from 'redux-first-router';
import createMemoryHistory from 'history/createMemoryHistory';
import * as constants from '../application/constants';

const routesMap = {
    [constants.SET_MAIN_TAB]: '/user/:mainPage',
};

interface ApplicationRouter {
    readonly reducer: Reducer<LocationState<string, any>>; // tslint:disable-line:no-any
    readonly enhancer: GenericStoreEnhancer;
    readonly middleware: Middleware;
}

export function buildRouter(): ApplicationRouter {
    const history = createMemoryHistory();
    const router = reduxFirstRouter.connectRoutes(history, routesMap);
    return { reducer: router.reducer, enhancer: router.enhancer, middleware: router.middleware };
}
