import { buildQuestionnaireFixture, Store } from '../fixtures/questionnaire';
export { Id, Question, QuestionsMap, Answer, AnswersMap, Store } from '../fixtures/questionnaire';

const buildDefaultStore = (): Store => (
    buildQuestionnaireFixture()
);

export const reducer = (store: Store = buildDefaultStore(), action?: any): Store => {
    if (!action) {
        return store;
    }
    return store;
};
