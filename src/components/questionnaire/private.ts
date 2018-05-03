import * as model from '../../stores/questionnaire';

export interface Answer {
    readonly text: string;
}

export interface Question {
    readonly text: string;
    readonly answers: ReadonlyArray<Answer>;
}

export type Store = ReadonlyArray<Question>;

export const selectQuestionnaire = (modelStore: model.Store): Store => {
    const questions = modelStore.questions;
    const answers = modelStore.answers;

    return Object.keys(questions).map((key: string) => {
        const question = questions[key];
        return {
            text: question.text,
            answers: selectAnswers(question.id, answers),
        };
    });
};

const selectAnswers = (questionId: model.Id, answers: model.AnswersMap): ReadonlyArray<Answer> => {
    const answerKeys = Object.keys(answers);

    const relatedAnswerKeys = answerKeys.filter((key: string) => (
        answers[key].questionId === questionId
    ));

    return relatedAnswerKeys.map((key: string) => ({
        text: answers[key].text,
    }));
};
