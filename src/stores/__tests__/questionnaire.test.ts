import * as questionnaire from '../questionnaire';
import * as constants from '../../application/constants';
import { aString, aBoolean } from '../../application/test_helpers/random_test_values';
import { QuestionBuilder, buildStore, AnswerBuilder } from './helpers';

describe('selecting an answer', () => {
    it('should create action with type SELECT_ANSWER', () => {
        const theAction = questionnaire.selectAnswer(aString());
        expect(theAction.type).toBe(constants.SELECT_ANSWER);
    });

    it('should create action with page id as passed to the action creator', () => {
        const theAnswerId = aString();
        const theAction = questionnaire.selectAnswer(theAnswerId);
        expect(theAction.payload.answerId).toBe(theAnswerId);
    });
});

describe('reducer', () => {
    it('should return original store if the action is undefined', () => {
        const store = buildStore([new QuestionBuilder()]);

        const newStore = questionnaire.reducer(store, undefined);

        expect(newStore).toBe(store);
    });

    it('should flip selected flag on the answer', () => {
        const selected = aBoolean();
        const theAnswerId = aString();
        const answer = new AnswerBuilder().withSelected(selected).withId(theAnswerId);
        const question = new QuestionBuilder().withAnswers([answer]);
        const store = buildStore([question]);
        const action = questionnaire.selectAnswer(theAnswerId);

        const newStore = questionnaire.reducer(store, action);

        expect(newStore.answers[theAnswerId].isSelected).not.toBe(selected);
    });
});
