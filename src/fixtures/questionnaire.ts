export type Id = string;

export interface Question {
    readonly id: Id;
    readonly text: string;
}

export interface QuestionsMap {
    [key: string]: Question;
}

export interface Answer {
    readonly id: Id;
    readonly questionId: Id;
    readonly text: string;
    readonly isSelected: boolean;
}

export interface AnswersMap {
    [key: string]: Answer;
}

export interface Store {
    questions: QuestionsMap;
    answers: AnswersMap;
}

export const buildQuestionnaireFixture = (): Store => {
    return {
        questions: {
            'q1': {
                id: 'q1',
                text: 'How long have you been in Canada?',
            },
            'q2': {
                id: 'q2',
                text: 'You are settling in Canada ...',
            },
            'q3': {
                id: 'q3',
                text: 'Which age group do you belong to?',
            },
        },
        answers: {
            'a1': {
                id: 'a1',
                questionId: 'q1',
                text: 'I am planning to move to Canada',
                isSelected: false,
            },
            'a2': {
                id: 'a2',
                questionId: 'q1',
                text: 'I just arrived less than 1 month ago',
                isSelected: false,
            },
            'a3': {
                id: 'a3',
                questionId: 'q1',
                text: 'Less than 6 months',
                isSelected: false,
            },
            'a4': {
                id: 'a4',
                questionId: 'q1',
                text: 'Less than 1 year',
                isSelected: false,
            },
            'a5': {
                id: 'a5',
                questionId: 'q1',
                text: 'Less than 2 years',
                isSelected: false,
            },
            'a6': {
                id: 'a6',
                questionId: 'q1',
                text: 'More than 2 years',
                isSelected: false,
            },
            'a7': {
                id: 'a7',
                questionId: 'q2',
                text: 'by yourself',
                isSelected: false,
            },
            'a8': {
                id: 'a8',
                questionId: 'q2',
                text: 'with your family',
                isSelected: false,
            },
            'a9': {
                id: 'a9',
                questionId: 'q3',
                text: 'Under 13 years old',
                isSelected: false,
            },
            'a10': {
                id: 'a10',
                questionId: 'q3',
                text: '13-18 years old',
                isSelected: false,
            },
            'a11': {
                id: 'a11',
                questionId: 'q3',
                text: '18-64 years old',
                isSelected: false,
            },
            'a12': {
                id: 'a12',
                questionId: 'q3',
                text: '65+ years old',
                isSelected: false,
            },
        },
    };
};
