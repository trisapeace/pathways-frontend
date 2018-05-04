import { buildQuestionnaireFixture, Store } from '../fixtures/questionnaire';
import { Id } from '../fixtures/questionnaire';
import * as constants from '../application/constants';
import * as helpers from './helpers/make_action';

export { Id, Question, Answer, QuestionsMap, AnswersMap, Store } from '../fixtures/questionnaire';

const buildDefaultStore = (): Store => (
    buildQuestionnaireFixture()
);

export type SelectAnswerAction = Readonly<ReturnType<typeof selectAnswer>>;

// tslint:disable-next-line:typedef
export const selectAnswer = (answerId: Id) => (
    helpers.makeAction(constants.SELECT_ANSWER, { answerId })
);

export const reducer = (store: Store = buildDefaultStore(), action?: SelectAnswerAction): Store => {
    if (!action) {
        return store;
    }
    switch (action.type) {
        case constants.SELECT_ANSWER:
            const id = action.payload.answerId;
            const answer = store.answers[id];
            return { ...store, answers: { ...store.answers, [id]: { ...answer, isSelected: !answer.isSelected } } };
        default:
            return store;
    }
};
