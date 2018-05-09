import * as model from '../stores/questionnaire';
import * as app from '../application/store';

export type Questionnaire = ReadonlyArray<Question>;

export interface Question {
    readonly id: model.Id;
    readonly text: string;
    readonly answers: ReadonlyArray<Answer>;
}

export interface Answer {
    readonly id: model.Id;
    readonly text: string;
    readonly isSelected: boolean;
}

export const selectQuestionnaire = (appStore: app.Store): Questionnaire => (
    denormalizeQuestions(appStore.applicationState.questionnaireInStore)
);

export const denormalizeQuestions = (modelStore: model.Store): Questionnaire => {
    const { questions, answers }: model.Store = modelStore;

    return Object.keys(questions).map((key: string) => {
        const { id, text }: model.Question = questions[key];
        return {
            id,
            text,
            answers: selectAnswersForQuestion(id, answers),
        };
    });
};

const selectAnswersForQuestion = (questionId: model.Id, answers: model.AnswersMap): ReadonlyArray<Answer> => {
    const keys = answerKeysForGivenQuestion(questionId, answers);

    return buildViewModelForAnswers(keys, answers);
};

const answerKeysForGivenQuestion = (questionId: model.Id, answers: model.AnswersMap): ReadonlyArray<string> => {
    return Object.keys(answers).filter((key: string) => (
        answers[key].questionId === questionId
    ));
};

const buildViewModelForAnswers = (keys: ReadonlyArray<string>, answers: model.AnswersMap): ReadonlyArray<Answer> => (
    keys.map((key: string) => {
        const { id, text, isSelected }: Answer = answers[key];
        return {
            id,
            text,
            isSelected,
        };
    })
);
