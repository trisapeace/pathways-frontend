import { selectAllQuestions } from '../select_all_questions';
import { Store } from '../../../stores/questionnaire';
import * as helpers from '../../../stores/test_helpers/questionnaire_helpers';
import * as viewModel from '../view_model';
import { anInteger } from '../../../application/test_helpers/random_test_values';

let anAnswer: helpers.AnswerBuilder;
let aQuestion: helpers.QuestionBuilder;
let theNormalizedStore: Store;
let theDenormalizedData: viewModel.AllTheQuestions;

describe('questionnaire selector', () => {
    beforeEach(() => {
        anAnswer = new helpers.AnswerBuilder();
        aQuestion = new helpers.QuestionBuilder().withAnswers([anAnswer]);
        theNormalizedStore = helpers.buildStore([aQuestion]);

        theDenormalizedData = selectAllQuestions(theNormalizedStore);
    });
    it('should include question id', () => {
        expect(theDenormalizedData[0].id).toBe(aQuestion.id);
    });
    it('should include question text', () => {
        expect(theDenormalizedData[0].text).toBe(aQuestion.text);
    });
    it('should nest answers inside questions', () => {
        expect(theDenormalizedData[0].answers[0].id).toBe(anAnswer.id);
    });
    it('should include answer text', () => {
        expect(theDenormalizedData[0].answers[0].text).toBe(anAnswer.text);
    });
    it('should include answer isSelected flag', () => {
        expect(theDenormalizedData[0].answers[0].isSelected).toBe(anAnswer.isSelected);
    });
    it('should return all the questions', () => {
        const questionCount = anInteger();
        const questions = new Array(questionCount).fill(0).map(() => new helpers.QuestionBuilder());
        theNormalizedStore = helpers.buildStore(questions);

        theDenormalizedData = selectAllQuestions(theNormalizedStore);

        expect(theDenormalizedData).toHaveLength(questionCount);
    });
    it('should return all the answers to a question', () => {
        const answerCount = anInteger();
        const answers = new Array(answerCount).fill(0).map(() => new helpers.AnswerBuilder());
        aQuestion = new helpers.QuestionBuilder().withAnswers(answers);
        theNormalizedStore = helpers.buildStore([aQuestion]);

        theDenormalizedData = selectAllQuestions(theNormalizedStore);

        expect(theDenormalizedData[0].answers).toHaveLength(answerCount);
    });
});
