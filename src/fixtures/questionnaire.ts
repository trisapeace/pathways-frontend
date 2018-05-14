export type Id = string;

export interface Question {
    readonly id: Id;
    readonly text: string;
    readonly acceptMultipleAnswers: boolean;
}

export interface QuestionsMap {
    readonly [key: string]: Question;
}

export interface Answer {
    readonly id: Id;
    readonly questionId: Id;
    readonly text: string;
    readonly isSelected: boolean;
}

export interface AnswersMap {
    readonly [key: string]: Answer;
}

export interface Store {
    readonly questions: QuestionsMap;
    readonly answers: AnswersMap;
}

export const buildQuestionnaireFixture = (): Store => {
    return {
        questions: {
            'q1': {
                id: 'q1',
                text: 'How long have you been in Canada?',
                acceptMultipleAnswers: false,
            },
            'q2': {
                id: 'q2',
                text: 'You are settling in Canada ...',
                acceptMultipleAnswers: false,
            },
            'q3': {
                id: 'q3',
                text: 'Which age group do you belong to?',
                acceptMultipleAnswers: false,
            },
            'q4': {
                id: 'q4',
                text: 'What do you need help with in Canada?',
                acceptMultipleAnswers: true,
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
            'a13': {
                id: 'a13',
                questionId: 'q4',
                text: 'Getting employed',
                isSelected: false,
            },
            'a14': {
                id: 'a14',
                questionId: 'q4',
                text: 'Learning English',
                isSelected: false,
            },
            'a15': {
                id: 'a15',
                questionId: 'q4',
                text: 'Enrolling my children in school',
                isSelected: false,
            },
            'a16': {
                id: 'a16',
                questionId: 'q4',
                text: 'Accessing health care',
                isSelected: false,
            },
            'a17': {
                id: 'a17',
                questionId: 'q4',
                text: 'Finances, taxex, banking',
                isSelected: false,
            },
            'a18': {
                id: 'a18',
                questionId: 'q4',
                text: 'Finding a place to live',
                isSelected: false,
            },
            'a19': {
                id: 'a19',
                questionId: 'q4',
                text: 'Bringing my family to Canada',
                isSelected: false,
            },
            'a20': {
                id: 'a20',
                questionId: 'q4',
                text: 'Getting mental health support',
                isSelected: false,
            },
            'a21': {
                id: 'a21',
                questionId: 'q4',
                text: 'Legal assistance and protection',
                isSelected: false,
            },
            'a22': {
                id: 'a22',
                questionId: 'q4',
                text: 'Enrolling myself in education',
                isSelected: false,
            },
        },
    };
};
