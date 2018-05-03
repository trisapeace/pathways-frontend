import * as model from '../../stores/questionnaire';

export interface Answer {
    readonly text: string;
    readonly isSelected: boolean;
}

export interface Question {
    readonly text: string;
    readonly answers: ReadonlyArray<Answer>;
}

export type AllTheQuestions = ReadonlyArray<Question>;

export const selectAllQuestions = (modelStore: model.Store): AllTheQuestions => {
    const questions = modelStore.questions;
    const answers = modelStore.answers;

    return Object.keys(questions).map((key: string) => {
        const question = questions[key];
        return {
            text: question.text,
            answers: selectRelatedAnswers(question.id, answers),
        };
    });
};

const selectRelatedAnswers = (questionId: model.Id, answers: model.AnswersMap): ReadonlyArray<Answer> => {
    const answerKeys = Object.keys(answers);

    const relatedAnswerKeys = answerKeys.filter((key: string) => (
        answers[key].questionId === questionId
    ));

    return relatedAnswerKeys.map((key: string) => ({
        text: answers[key].text,
        isSelected: answers[key].selected,
    }));
};
