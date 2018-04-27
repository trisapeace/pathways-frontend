import { buildQuestionnaireFixture } from '../fixtures/questionnaire';

export interface Answer {
    readonly text: string;
}

export interface Question {
    readonly text: string;
    readonly answers: ReadonlyArray<Answer>;
}

export type Store = ReadonlyArray<Question>;

const buildDefaultStore = (): Store => (
    buildQuestionnaireFixture()
);

export const reducer = (store: Store = buildDefaultStore(), action?: any): Store => {
    if (!action) {
        return store;
    }
    return store;
};
