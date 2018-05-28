export type Id = string;

export interface Task {
    readonly id: Id;
    readonly title: string;
    readonly description: string;
    readonly tags: ReadonlyArray<string>; // i.e important, do soon, free etc.
    readonly category: string; // i.e. education, health, transportation etc.
    readonly importance: number;
}

export interface TaskUserSettings {
    readonly id: Id;
    readonly taskId: Id;
    readonly starred: boolean;
    readonly completed: boolean;
}

export interface TaskMap {
    readonly [property: string]: Task;
}

export interface TaskUserSettingsMap {
    readonly [property: string]: TaskUserSettings;
}

export type TaskList = ReadonlyArray<Id>;

export interface Store {
    readonly taskMap: TaskMap;
    readonly taskUserSettingsMap: TaskUserSettingsMap;
    readonly savedTasksList: TaskList;
    readonly suggestedTasksList: TaskList;
}

export const buildTasksFixture = (): Store => {
    return {
        taskMap: {
          't1': {
            'id': 't1',
            'title': 'Enroll child in elementary school.',
            'description': '',
            'tags': ['important', 'do soon', 'free'],
            'category': 'education',
            'importance': 1,
          },
          't2': {
            'id': 't2',
            'title': 'Register for Language Instruction for Newcomer to Canada (LINC) classes.',
            'description': '',
            'tags': ['important', 'do soon', 'free'],
            'category': 'education',
            'importance': 1,
          },
          't3': {
            'id': 't3',
            'title': 'Get support for English language learning for children.',
            'description': '',
            'tags': ['important', 'do soon', 'free'],
            'category': 'education',
            'importance': 1,
          },
          't4': {
            'id': 't4',
            'title': 'Open a bank account',
            'description': '',
            'tags': ['important'],
            'category': 'finance',
            'importance': 1,
          },
          't5': {
            'id': 't5',
            'title': 'Get social insurance number (SIN)',
            'description': '',
            'tags': ['important'],
            'category': 'employment',
            'importance': 1,
          },
        },
        taskUserSettingsMap: {
          'tu1': {
            'id': 'tu1',
            'taskId': 't1',
            'starred': false,
            'completed': false,
          },
          'tu2': {
            'id': 'tu2',
            'taskId': 't2',
            'starred': false,
            'completed': false,
          },
          'tu3': {
            'id': 'tu3',
            'taskId': 't3',
            'starred': false,
            'completed': false,
          },
          'tu4': {
            'id': 'tu4',
            'taskId': 't4',
            'starred': false,
            'completed': false,
          },
          'tu5': {
            'id': 'tu5',
            'taskId': 't5',
            'starred': false,
            'completed': false,
          },
        },
        savedTasksList: ['t1', 't2', 't3'],
        suggestedTasksList: ['t4', 't5'],
    };
};
