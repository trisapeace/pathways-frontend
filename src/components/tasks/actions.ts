import * as models from '../../stores/tasks';

export interface TasksActions {
    readonly addToTaskList: (taskId: models.Id) => void;
    readonly removeFromTaskList: (taskId: models.Id) => void;
    readonly markTaskAsComplete: (taskId: models.Id) => void;
    readonly shareTask: (taskId: models.Id) => void;
    readonly starTask: (taskId: models.Id) => void;
}