import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

import { watchLoadLocale, watchSetLocale } from './locale';

export const sagaMiddleware = createSagaMiddleware();

interface ApplicationSaga {
    readonly middleware: SagaMiddleware<object>;
}

export function buildSaga(): ApplicationSaga {
    return {
        middleware: createSagaMiddleware<object>(),
    };
}

export function runSaga(middleware: SagaMiddleware<object>): void {
    middleware.run(watchLoadLocale); // tslint:disable-line:no-expression-statement
    middleware.run(watchSetLocale); // tslint:disable-line:no-expression-statement
}