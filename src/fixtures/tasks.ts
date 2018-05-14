export type Id = string;

export interface Task {
    readonly id: Id;
    readonly title: string;
    readonly description: string;
    readonly tags: ReadonlyArray<string>; // i.e important, do soon, free etc.
    readonly category: string; // i.e. education, health, transportation etc.
    readonly importance: number;
}

export interface Tasks {
  [property: string]: Task;
}

export interface UserTask {
    readonly id: Id;
    readonly taskId: Id;
    readonly starred: boolean;
    readonly completed: boolean;
    readonly suggested: boolean;
}

interface UserTasks {
    readonly [property: string]: UserTask;
}

export interface Store {
    readonly tasks: Tasks;
    readonly userTasks: UserTasks;
}

export const buildTasksFixture = (): Store => {
    return {
        tasks: {
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
        },
        userTasks: {
          'u1': {
            'id': 'u1',
            'taskId': 't1',
            'starred': false,
            'completed': false,
            'suggested': true,
          },
          'u2': {
            'id': 'u2',
            'taskId': 't2',
            'starred': false,
            'completed': false,
            'suggested': true,
          },
          'u3': {
            'id': 'u3',
            'taskId': 't3',
            'starred': false,
            'completed': false,
            'suggested': true,
          },
        },
    };
};
