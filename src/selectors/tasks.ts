import * as models from '../stores/tasks';

export interface TaskViewModel {
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

export const selectTasks = ({ tasks, taskDefinitions }: models.Store): ReadonlyArray<TaskViewModel> => {
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
