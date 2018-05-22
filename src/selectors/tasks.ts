import * as models from '../stores/tasks';

export interface TaskViewModel {
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

export const taskModelsToView = (task: models.Task, taskDefinition: models.TaskDefinition): TaskViewModel => {
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

export const taskViewToTask = (taskViewModel: TaskViewModel): models.Task => {
    return {
        id: taskViewModel.id,
        taskDefinitionId: taskViewModel.taskDefinitionId,
        starred: taskViewModel.starred,
        completed: taskViewModel.completed,
        suggested: taskViewModel.suggested,
    };
};

export const selectTasks = ({ tasks, taskDefinitions }: models.Store): ReadonlyArray<TaskViewModel> => {
    return Object.keys(tasks).map((key: string) => {
        const task: models.Task = tasks[key];
        const taskDefinition: models.TaskDefinition = taskDefinitions[task.taskDefinitionId];
        return taskModelsToView(task, taskDefinition);
    });
};

export const selectSuggestedTasks = ({ suggestedTasks, taskDefinitions }: models.Store): ReadonlyArray<TaskViewModel> => {
    return Object.keys(suggestedTasks).map((key: string) => {
        const task: models.Task = suggestedTasks[key];
        const taskDefinition: models.TaskDefinition = taskDefinitions[task.taskDefinitionId];
        return taskModelsToView(task, taskDefinition);
    });
};
