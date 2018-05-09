import * as store from '../questionnaire';
import * as helpers from './helpers/questionnaire_helpers';
import { SELECT_ANSWER } from '../../application/constants';
import { aString, aBoolean } from '../../application/__tests__/helpers/random_test_values';

describe('select answer action creator', () => {
    it('should create action with type SELECT_ANSWER', () => {
        const theAction = store.selectAnswer(aString());
        expect(theAction.type).toBe(SELECT_ANSWER);
    });

    it('should create action with page id as passed to the action creator', () => {
        const theAnswerId = aString();
        const theAction = store.selectAnswer(theAnswerId);
        expect(theAction.payload.answerId).toBe(theAnswerId);
    });
});

describe('questionnaire reducer', () => {

    it('should return original store if the action is undefined', () => {
        const theStore = helpers.buildNormalizedQuestionnaire([new helpers.QuestionBuilder()]);

        const theNewStore = store.reducer(theStore, undefined);

        expect(theNewStore).toEqual(theStore);
    });

    it('should flip selected flag on the answer with the given id', () => {
        const selected = aBoolean();
        const theAnswerId = aString();
        const answer = new helpers.AnswerBuilder().withSelected(selected).withId(theAnswerId);
        const question = new helpers.QuestionBuilder().withAnswers([answer]);
        const theStore = helpers.buildNormalizedQuestionnaire([question]);
        const action = store.selectAnswer(theAnswerId);

        const newStore = store.reducer(theStore, action);

        expect(newStore.answers[theAnswerId].isSelected).not.toBe(selected);
    });
});
