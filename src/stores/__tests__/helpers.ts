import * as store from '../questionnaire';
import { aString, aBoolean } from '../../application/test_helpers/random_test_values';

export const buildStore = (questions: Array<QuestionBuilder>): store.Store => {
    return {
        questions: buildQuestionMap(questions),
        answers: buildAnswerMap(questions),
    };
};

const buildQuestionMap = (questions: Array<QuestionBuilder>): store.QuestionsMap => {
    let result: WritableQuestionsMap = {};
    questions.forEach((question: QuestionBuilder): void => {
        result[question.id] = question.build();
    });
    return result;
};

const buildAnswerMap = (questions: Array<QuestionBuilder>): store.AnswersMap => {
    let result: WritableAnswersMap = {};
    questions.forEach((question: QuestionBuilder): void => {
        question.answers.forEach((answer: AnswerBuilder) => {
            result[answer.id] = answer.withQuestionId(question.id).build();
        });
    });
    return result;
};

interface WritableQuestionsMap {
    [key: string]: store.Question;
}

interface WritableAnswersMap {
    [key: string]: store.Answer;
}

export class QuestionBuilder {
    id: string = aString();
    text: string = aString();
    answers: Array<AnswerBuilder> = [new AnswerBuilder(), new AnswerBuilder(), new AnswerBuilder()];

    withId(id: string): QuestionBuilder {
        this.id = id;
        return this;
    }

    withText(text: string): QuestionBuilder {
        this.text = text;
        return this;
    }

    withAnswers(answers: Array<AnswerBuilder>): QuestionBuilder {
        this.answers = answers;
        return this;
    }

    build(): store.Question {
        return {
            id: this.id,
            text: this.text,
        };
    }
}

export class AnswerBuilder {
    id: string = aString();
    questionId: string = aString();
    text: string = aString();
    isSelected: boolean = aBoolean();

    withId(id: string): AnswerBuilder {
        this.id = id;
        return this;
    }

    withQuestionId(questionId: string): AnswerBuilder {
        this.questionId = questionId;
        return this;
    }

    withText(text: string): AnswerBuilder {
        this.text = text;
        return this;
    }

    withSelected(isSelected: boolean): AnswerBuilder {
        this.isSelected = isSelected;
        return this;
    }

    build(): store.Answer {
        return {
            id: this.id,
            questionId: this.questionId,
            text: this.text,
            isSelected: this.isSelected,
        };
    }
}
