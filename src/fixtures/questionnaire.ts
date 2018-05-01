interface Answer {
    readonly text: string;
}

interface Question {
    readonly text: string;
    readonly answers: ReadonlyArray<Answer>;
}

export const buildQuestionnaireFixture = (): ReadonlyArray<Question> => {
    return [
        {
            text: 'How long have you been in Canada?',
            answers: [
                {
                    text: 'I am planning to move to Canada',
                },
                {
                    text: 'I just arrived less than 1 month ago',
                },
                {
                    text: 'Less than 6 monghts',
                },
                {
                    text: 'Less than 1 year',
                },
                {
                    text: 'Less than 2 years',
                },
                {
                    text: 'More than 2 years',
                },
            ],
        },
        {
            text: 'You are settling in Canada ...',
            answers: [
                {
                    text: 'by yourself',
                },
                {
                    text: 'with your family',
                },
            ],
        },
        {
            text: 'Which age group do you belong to?',
            answers: [
                {
                    text: 'Under 13 years old',
                },
                {
                    text: '13-18 years old',
                },
                {
                    text: '18-64 years old',
                },
                {
                    text: '65+ years old',
                },
            ],
        },
    ];
};
