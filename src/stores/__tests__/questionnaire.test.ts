// tslint:disable:no-expression-statement

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

    describe('for questions accepting at most one answer', () => {
        it('when selecting an answer should deselect previously selected answer', () => {
            const selectedAnswer = new helpers.AnswerBuilder().withSelected(true);
            const unselectedAnswer = new helpers.AnswerBuilder().withSelected(false);
            const question = new helpers.QuestionBuilder().
                withAnswers([selectedAnswer, unselectedAnswer]).
                withAcceptsMultipleAnswers(false);
            const theStore = helpers.buildNormalizedQuestionnaire([question]);
            const action = store.selectAnswer(unselectedAnswer.id);

            const newStore = store.reducer(theStore, action);

            expect(newStore.answers[selectedAnswer.id].isSelected).toBe(false);
            expect(newStore.answers[unselectedAnswer.id].isSelected).toBe(true);
        });
    });

    describe('for questions accepting more than one answer', () => {
        it('when selecting an answer keep previously selected answer', () => {
            const selectedAnswer = new helpers.AnswerBuilder().withSelected(true);
            const unselectedAnswer = new helpers.AnswerBuilder().withSelected(false);
            const question = new helpers.QuestionBuilder().withAnswers([selectedAnswer, unselectedAnswer]).
                withAcceptsMultipleAnswers(true);
            const theStore = helpers.buildNormalizedQuestionnaire([question]);
            const action = store.selectAnswer(unselectedAnswer.id);

            const newStore = store.reducer(theStore, action);

            expect(newStore.answers[selectedAnswer.id].isSelected).toBe(true);
            expect(newStore.answers[unselectedAnswer.id].isSelected).toBe(true);
        });
    });
});
