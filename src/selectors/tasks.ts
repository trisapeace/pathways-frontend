import * as stores from '../stores/tasks';

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

export const taskModelsToView = (task: stores.Task, taskDefinition: stores.TaskDefinition): TaskViewModel => {
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

export const taskViewToTask = (taskViewModel: TaskViewModel): stores.Task => {
    return {
        id: taskViewModel.id,
        taskDefinitionId: taskViewModel.taskDefinitionId,
        starred: taskViewModel.starred,
        completed: taskViewModel.completed,
        suggested: taskViewModel.suggested,
    };
};

export const selectTasks = ({ tasks, taskDefinitions }: stores.Store): ReadonlyArray<TaskViewModel> => {
    return Object.keys(tasks).map((key: string) => {
        const task: stores.Task = tasks[key];
        const taskDefinition: stores.TaskDefinition = taskDefinitions[task.taskDefinitionId];
        return taskModelsToView(task, taskDefinition);
    });
};

export const selectSuggestedTasks = ({ suggestedTasks, taskDefinitions }: stores.Store): ReadonlyArray<TaskViewModel> => {
    return Object.keys(suggestedTasks).map((key: string) => {
        const task: stores.Task = suggestedTasks[key];
        const taskDefinition: stores.TaskDefinition = taskDefinitions[task.taskDefinitionId];
        return taskModelsToView(task, taskDefinition);
    });
};
