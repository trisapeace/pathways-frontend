// tslint:disable:no-expression-statement
// tslint:disable:no-let
import * as selector from '../questionnaire';
import { anInteger } from '../../application/__tests__/helpers/random_test_values';
import * as testHelpers from '../../stores/__tests__/helpers/questionnaire_helpers';

describe('questionnaire selector', () => {

    describe('should map properties', () => {

        let anAnswer: testHelpers.AnswerBuilder;
        let aQuestion: testHelpers.QuestionBuilder;
        let denormalizedData: selector.Questionnaire;

        beforeEach(() => {
            anAnswer = new testHelpers.AnswerBuilder();
            aQuestion = new testHelpers.QuestionBuilder().withAnswers([anAnswer]);
            const normalizedData = testHelpers.buildNormalizedQuestionnaire([aQuestion]);

            denormalizedData = selector.denormalizeQuestions(normalizedData);
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
            new testHelpers.QuestionBuilder()),
        );
        const normalizedData = testHelpers.buildNormalizedQuestionnaire(questions);

        const denormalizedData = selector.denormalizeQuestions(normalizedData);

        expect(denormalizedData).toHaveLength(questionCount);
    });

    it('should return all the answers to a question', () => {
        const answerCount = anInteger();
        const answers = new Array(answerCount).fill(0).map(() => (
            new testHelpers.AnswerBuilder()),
        );
        const theQuestion = new testHelpers.QuestionBuilder().withAnswers(answers);
        const normalizedData = testHelpers.buildNormalizedQuestionnaire([theQuestion]);

        const denormalizedData = selector.denormalizeQuestions(normalizedData);

        expect(denormalizedData[0].answers).toHaveLength(answerCount);
    });
});
