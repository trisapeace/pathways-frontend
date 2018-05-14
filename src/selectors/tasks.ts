import * as models from '../stores/tasks';
import * as app from '../application/store';

export interface Task {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly category: string;
    readonly importance: number;
    readonly starred: boolean;
    readonly completed: boolean;
    readonly suggested: boolean;
    readonly tags: ReadonlyArray<string>;
}

export const selectTasks = (appStore: app.Store): ReadonlyArray<Task> => {
    const { tasks, taskDefinitions }: models.Store = appStore.applicationState.tasksInStore;

    return Object.keys(tasks).map((key: string) => {
        const task: models.Task = tasks[key];
        const taskDefinition: models.TaskDefinition = taskDefinitions[task.taskDefinitionId];
        return {
            id: task.id,
            title: taskDefinition.title,
            description: taskDefinition.description,
            category: taskDefinition.category,
            importance: taskDefinition.importance,
            starred: task.starred,
            completed: task.completed,
            suggested: task.suggested,
            tags: taskDefinition.tags,
        };
    });
};
