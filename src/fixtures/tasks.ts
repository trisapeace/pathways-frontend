export type Id = string;

export interface TaskDefinition {
    readonly id: Id;
    readonly title: string;
    readonly description: string;
    readonly tags: ReadonlyArray<string>; // i.e important, do soon, free etc.
    readonly category: string; // i.e. education, health, transportation etc.
    readonly importance: number;
}

export interface TaskDefinitionsMap {
  readonly [property: string]: TaskDefinition;
}

export interface Task {
    readonly id: Id;
    readonly taskDefinitionId: Id;
    readonly starred: boolean;
    readonly completed: boolean;
    readonly suggested: boolean;
}

export interface TasksMap {
    readonly [property: string]: Task;
}

export interface Store {
    readonly taskDefinitionsMap: TaskDefinitionsMap;
    readonly tasksMap: TasksMap;
    readonly suggestedTasksMap: TasksMap;
}

export const buildTasksFixture = (): Store => {
    return {
        taskDefinitionsMap: {
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
          'td5': {
            'id': 'td5',
            'title': 'Get social insurance number (SIN)',
            'description': '',
            'tags': ['important'],
            'category': 'employment',
            'importance': 1,
          },
        },
        tasksMap: {
          't1': {
            'id': 't1',
            'taskDefinitionId': 'td1',
            'starred': false,
            'completed': false,
            'suggested': false,
          },
          't2': {
            'id': 't2',
            'taskDefinitionId': 'td2',
            'starred': false,
            'completed': false,
            'suggested': false,
          },
          't3': {
            'id': 't3',
            'taskDefinitionId': 'td3',
            'starred': false,
            'completed': false,
            'suggested': false,
          },
        },
        suggestedTasksMap: {
          't4': {
            'id': 't4',
            'taskDefinitionId': 'td4',
            'starred': false,
            'completed': false,
            'suggested': false,
          },
          't5': {
            'id': 't5',
            'taskDefinitionId': 'td5',
            'starred': false,
            'completed': false,
            'suggested': false,
          },
        },
    };
};
