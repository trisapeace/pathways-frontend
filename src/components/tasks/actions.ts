import * as stores from '../../stores/tasks';

export interface TaskActions {
    readonly addToTaskList?: (task: stores.Task) => stores.AddToTaskListAction;
    readonly removeFromTaskList?: (taskId: stores.Id) => stores.RemoveFromTaskListAction;
    readonly toggleTaskCompleted?: (taskId: stores.Id) => stores.ToggleTaskCompletedAction;
    readonly toggleTaskStarred?: (taskId: stores.Id) => stores.ToggleTaskStarredAction;
    readonly shareTask?: (taskId: stores.Id) => stores.ShareTaskAction;
}
