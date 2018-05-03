import * as model from '../../stores/questionnaire';
import * as viewModel from './view_model';

export const selectAllQuestions = (modelStore: model.Store): viewModel.AllTheQuestions => {
    const questions = modelStore.questions;
    const answers = modelStore.answers;

    return Object.keys(questions).map((key: string) => {
        const question = questions[key];
        return {
            id: question.id,
            text: question.text,
            answers: selectRelatedAnswers(question.id, answers),
        };
    });
};

const selectRelatedAnswers = (questionId: model.Id, answers: model.AnswersMap): ReadonlyArray<viewModel.Answer> => {
    const answerKeys = Object.keys(answers);

    const relatedAnswerKeys = answerKeys.filter((key: string) => (
        answers[key].questionId === questionId
    ));

    return relatedAnswerKeys.map((key: string) => {
        const answer = answers[key];
        return {
            id: answer.id,
            text: answer.text,
            isSelected: answer.isSelected,
        };
    });
};
