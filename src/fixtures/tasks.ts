export type Id = string;

export interface TaskDefinition {
    readonly id: Id;
    readonly title: string;
    readonly description: string;
    readonly tags: ReadonlyArray<string>; // i.e important, do soon, free etc.
    readonly category: string; // i.e. education, health, transportation etc.
    readonly importance: number;
}

export interface TaskDefinitions {
  readonly [property: string]: TaskDefinition;
}

export interface Task {
    readonly id: Id;
    readonly taskDefinitionId: Id;
    readonly starred: boolean;
    readonly completed: boolean;
    readonly suggested: boolean;
}

export interface Tasks {
    readonly [property: string]: Task;
}

export interface Store {
    readonly taskDefinitions: TaskDefinitions;
    readonly tasks: Tasks;
}

export const buildTasksFixture = (): Store => {
    return {
        taskDefinitions: {
          'td1': {
            'id': 'td1',
            'title': 'Enroll child in elementary school.',
            'description': '',
            'tags': ['important', 'do soon', 'free'],
            'category': 'education',
            'importance': 1,
          },
          'td2': {
            'id': 'td2',
            'title': 'Register for Language Instruction for Newcomer to Canada (LINC) classes.',
            'description': '',
            'tags': ['important', 'do soon', 'free'],
            'category': 'education',
            'importance': 1,
          },
          'td3': {
            'id': 'td3',
            'title': 'Get support for English language learning for children.',
            'description': '',
            'tags': ['important', 'do soon', 'free'],
            'category': 'education',
            'importance': 1,
          },
          'td4': {
            'id': 'td4',
            'title': 'Open a bank account',
            'description': '',
            'tags': ['important'],
            'category': 'finance',
            'importance': 1,
          },
        },
        tasks: {
          't1': {
            'id': 't1',
            'taskDefinitionId': 'td1',
            'starred': false,
            'completed': false,
            'suggested': true,
          },
          't2': {
            'id': 't2',
            'taskDefinitionId': 'td2',
            'starred': false,
            'completed': false,
            'suggested': true,
          },
          't3': {
            'id': 't3',
            'taskDefinitionId': 'td3',
            'starred': false,
            'completed': false,
            'suggested': true,
          },
          't4': {
            'id': 't4',
            'taskDefinitionId': 'td4',
            'starred': false,
            'completed': false,
            'suggested': true,
          },
        },
    };
};
