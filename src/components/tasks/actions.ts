import * as models from '../../stores/tasks';

export interface TaskActions {
    readonly addToTaskList?: (task: models.Task) => models.AddToTaskListAction;
    readonly removeFromTaskList?: (taskId: models.Id) => models.RemoveFromTaskListAction;
    readonly toggleTaskCompleted?: (taskId: models.Id) => models.ToggleTaskCompletedAction;
    readonly toggleTaskStarred?: (taskId: models.Id) => models.ToggleTaskStarredAction;
    readonly shareTask?: (taskId: models.Id) => models.ShareTaskAction;
}
