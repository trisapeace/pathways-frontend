import * as model from '../../stores/questionnaire';

export interface Answer {
    readonly id: model.Id;
    readonly text: string;
    readonly isSelected: boolean;
}

export interface Question {
    readonly id: model.Id;
    readonly text: string;
    readonly answers: ReadonlyArray<Answer>;
}

export type AllTheQuestions = ReadonlyArray<Question>;

export interface QuestionnaireActions {
    selectAnswer: (answerId: model.Id) => model.SelectAnswerAction;
}
