import { buildQuestionnaireFixture, Store } from '../fixtures/questionnaire';
import { Id, AnswersMap } from '../fixtures/questionnaire';
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
            return selectAnswerWithId(store, action.payload.answerId);
        default:
            return store;
    }
};

const selectAnswerWithId = (store: Store, answerId: string): Store => (
    canSelectMultiple(store, answerId) ? selectIt(store, answerId) : selectOnlyIt(store, answerId)
);

const canSelectMultiple = (store: Store, answerId: string): boolean => {
    const answer = store.answers[answerId];
    const question = store.questions[answer.questionId];
    return question.acceptMultipleAnswers;
};

const selectIt = (store: Store, answerId: string): Store => {
    const answer = store.answers[answerId];
    return {
        ...store,
        answers: {
            ...store.answers,
            [answerId]: {
                ...answer,
                isSelected: !answer.isSelected,
            },
        },
    };
};

const selectOnlyIt = (store: Store, answerId: string): Store => {
    const answer = store.answers[answerId];
    const allDeselected = deselectAllAnswersToQuestion(store, answer.questionId);
    return selectIt(allDeselected, answerId);
};

const deselectAllAnswersToQuestion = (store: Store, questionId: string): Store => {
    const deselctAnswerToQuestion = (accumulator: AnswersMap, currentId: string): AnswersMap => {
        const answer = store.answers[currentId];
        const shouldDeselect = answer.questionId === questionId && answer.isSelected;
        const newAnswer = shouldDeselect ? { ...answer, isSelected: false } : answer;
        return {
            ...accumulator,
            [currentId]: newAnswer,
        };
    };
    return {
        ...store,
        answers: Object.keys(store.answers).reduce(deselctAnswerToQuestion, {}),
    };
};
