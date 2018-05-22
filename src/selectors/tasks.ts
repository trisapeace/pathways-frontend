import * as stores from '../stores/tasks';

export interface Task {
    readonly id: string;
    readonly taskDefinitionId: string;
    readonly title: string;
    readonly description: string;
    readonly category: string;
    readonly importance: number;
    readonly starred: boolean;
    readonly completed: boolean;
    readonly suggested: boolean;
    readonly tags: ReadonlyArray<string>;
}

export const denormalizeTask = (task: stores.Task, taskDefinition: stores.TaskDefinition): Task => {
    return {
        id: task.id,
        taskDefinitionId: taskDefinition.id,
        title: taskDefinition.title,
        description: taskDefinition.description,
        category: taskDefinition.category,
        importance: taskDefinition.importance,
        starred: task.starred,
        completed: task.completed,
        suggested: task.suggested,
        tags: taskDefinition.tags,
    };
};

export const normalizeTask = (task: Task): stores.Task => {
    return {
        id: task.id,
        taskDefinitionId: task.taskDefinitionId,
        starred: task.starred,
        completed: task.completed,
        suggested: task.suggested,
    };
};

export const selectTasks = ({ tasksMap, taskDefinitionsMap }: stores.Store): ReadonlyArray<Task> => {
    return Object.keys(tasksMap).map((key: string) => {
        const task: stores.Task = tasksMap[key];
        const taskDefinition: stores.TaskDefinition = taskDefinitionsMap[task.taskDefinitionId];
        return denormalizeTask(task, taskDefinition);
    });
};

export const selectSuggestedTasks = ({ suggestedTasksMap, taskDefinitionsMap }: stores.Store): ReadonlyArray<Task> => {
    return Object.keys(suggestedTasksMap).map((key: string) => {
        const task: stores.Task = suggestedTasksMap[key];
        const taskDefinition: stores.TaskDefinition = taskDefinitionsMap[task.taskDefinitionId];
        return denormalizeTask(task, taskDefinition);
    });
};
