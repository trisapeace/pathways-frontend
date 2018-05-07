import * as helpers from '../test_helpers/questionnaire_helpers';
import { aString, aBoolean } from '../../application/test_helpers/random_test_values';

describe('helper for', () => {
    describe('building questions', () => {
        it('can build a question', () => {
            const id = aString();
            const text = aString();
            const question = new helpers.QuestionBuilder().
                withId(id).
                withText(text).
                build();
            expect(question.id).toBe(id);
            expect(question.text).toBe(text);
        });
        it('defaults to three answers', () => {
            const question = new helpers.QuestionBuilder();
            expect(question.answers).toHaveLength(3);
        });
    });
    describe('building answers', () => {
        it('can build an answer', () => {
            const id = aString();
            const questionId = aString();
            const text = aString();
            const isSelected = aBoolean();
            const question = new helpers.AnswerBuilder().
                withId(id).
                withQuestionId(questionId).
                withText(text).
                withSelected(isSelected).
                build();
            expect(question.id).toBe(id);
            expect(question.text).toBe(text);
            expect(question.questionId).toBe(questionId);
            expect(question.isSelected).toBe(isSelected);
        });
    });
    describe('building stores', () => {
        it('adds questions keyed on their ids', () => {
            const questionId = aString();
            const builder = new helpers.QuestionBuilder().
                withId(questionId);

            const store = helpers.buildStore([builder]);

            expect(store.questions[questionId]).toHaveProperty('id', questionId);
        });
        it('adds answers keyed on their ids', () => {
            const answerId = aString();
            const answerBuilder = new helpers.AnswerBuilder().
                withId(answerId);
            const questionBuilder = new helpers.QuestionBuilder().
                withAnswers([answerBuilder]);

            const store = helpers.buildStore([questionBuilder]);

            expect(store.answers[answerId]).toHaveProperty('id', answerId);
        });
        it('sets question id on answers', () => {
            const answerId = aString();
            const answerBuilder = new helpers.AnswerBuilder().
                withId(answerId);
            const questionId = aString();
            const questionBuilder = new helpers.QuestionBuilder().
                withId(questionId).
                withAnswers([answerBuilder]);

            const store = helpers.buildStore([questionBuilder]);

            expect(store.answers[answerId].questionId).toBe(questionId);
        });
    });
});
