import { selectAllQuestions } from '../select_all_questions';
import * as helpers from '../../../stores/test_helpers/questionnaire_helpers';
import * as viewModel from '../view_model';
import { anInteger } from '../../../application/test_helpers/random_test_values';

describe('questionnaire selector', () => {

    describe('should map properties', () => {

        let anAnswer: helpers.AnswerBuilder;
        let aQuestion: helpers.QuestionBuilder;
        let denormalizedData: viewModel.AllTheQuestions;

        beforeEach(() => {
            anAnswer = new helpers.AnswerBuilder();
            aQuestion = new helpers.QuestionBuilder().withAnswers([anAnswer]);
            const normalizedData = helpers.buildNormalizedQuestionnaire([aQuestion]);

            denormalizedData = selectAllQuestions(normalizedData);
        });

        it('question id', () => {
            expect(denormalizedData[0].id).toBe(aQuestion.id);
        });

        it('question text', () => {
            expect(denormalizedData[0].text).toBe(aQuestion.text);
        });

        it('should nest answers inside questions', () => {
            expect(denormalizedData[0].answers[0].id).toBe(anAnswer.id);
        });

        it('answer text', () => {
            expect(denormalizedData[0].answers[0].text).toBe(anAnswer.text);
        });

        it('answer isSelected flag', () => {
            expect(denormalizedData[0].answers[0].isSelected).toBe(anAnswer.isSelected);
        });
    });

    it('should return all the questions', () => {
        const questionCount = anInteger();
        const questions = new Array(questionCount).fill(0).map(() => (
            new helpers.QuestionBuilder()),
        );
        const normalizedData = helpers.buildNormalizedQuestionnaire(questions);

        const denormalizedData = selectAllQuestions(normalizedData);

        expect(denormalizedData).toHaveLength(questionCount);
    });

    it('should return all the answers to a question', () => {
        const answerCount = anInteger();
        const answers = new Array(answerCount).fill(0).map(() => (
            new helpers.AnswerBuilder()),
        );
        const theQuestion = new helpers.QuestionBuilder().withAnswers(answers);
        const normalizedData = helpers.buildNormalizedQuestionnaire([theQuestion]);

        const denormalizedData = selectAllQuestions(normalizedData);

        expect(denormalizedData[0].answers).toHaveLength(answerCount);
    });
});
