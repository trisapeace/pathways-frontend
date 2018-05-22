import { buildTasksFixture, Store, Task, Id } from '../fixtures/tasks';
import * as constants from '../application/constants';
import * as helpers from './helpers/make_action';

export { Id, Store, Task, TasksMap, TaskDefinition, TaskDefinitionsMap } from '../fixtures/tasks';

export type AddToTaskListAction = Readonly<ReturnType<typeof addToTaskList>>;
export type RemoveFromTaskListAction = Readonly<ReturnType<typeof removeFromTaskList>>;
export type ToggleTaskCompletedAction = Readonly<ReturnType<typeof toggleTaskCompleted>>;
export type ShareTaskAction = Readonly<ReturnType<typeof shareTask>>;
export type ToggleTaskStarredAction = Readonly<ReturnType<typeof toggleTaskStarred>>;
export type ToggleTaskSuggestedAction = Readonly<ReturnType<typeof toggleTaskSuggested>>;
export type TaskAction = AddToTaskListAction |
                         RemoveFromTaskListAction |
                         ToggleTaskCompletedAction |
                         ToggleTaskStarredAction |
                         ToggleTaskSuggestedAction |
                         ShareTaskAction;

// tslint:disable-next-line:typedef
export const addToTaskList = (task: Task) => (
    helpers.makeAction(constants.ADD_TO_TASK_LIST, { task })
);

// tslint:disable-next-line:typedef
export const removeFromTaskList = (taskId: Id) => (
    helpers.makeAction(constants.REMOVE_FROM_TASK_LIST, { taskId })
);

// tslint:disable-next-line:typedef
export const toggleTaskCompleted = (taskId: Id) => (
    helpers.makeAction(constants.TOGGLE_TASK_COMPLETED, { taskId })
);

// tslint:disable-next-line:typedef
export const toggleTaskStarred = (taskId: Id) => (
    helpers.makeAction(constants.TOGGLE_TASK_STARRED, { taskId })
);

// tslint:disable-next-line:typedef
export const toggleTaskSuggested = (taskId: Id) => (
    helpers.makeAction(constants.TOGGLE_TASK_SUGGESTED, { taskId })
);

// tslint:disable-next-line:typedef
export const shareTask = (taskId: Id) => (
    helpers.makeAction(constants.SHARE_TASK, { taskId })
);

export const buildDefaultStore = (): Store => (
    buildTasksFixture()
);

export const reducer = (store: Store = buildDefaultStore(), action?: TaskAction): Store => {
    if (!action) {
        return store;
    }
    switch (action.type) {
        case constants.ADD_TO_TASK_LIST:
            return {
                ...store,
                tasksMap: {
                    ...store.tasksMap,
                    [action.payload.task.id]: action.payload.task,
                },
            };
        case constants.REMOVE_FROM_TASK_LIST:
            const tasksMap = { ...store.tasksMap };
            // tslint:disable-next-line:no-expression-statement
            delete(tasksMap[action.payload.taskId]);
            return { ...store, tasksMap };
        case constants.TOGGLE_TASK_COMPLETED: {
            const task = store.tasksMap[action.payload.taskId];
            return setTaskValue(store, task, 'completed', !task.completed);
        }
        case constants.TOGGLE_TASK_STARRED: {
            const task = store.tasksMap[action.payload.taskId];
            return setTaskValue(store, task, 'starred', !task.starred);
        }
        case constants.TOGGLE_TASK_SUGGESTED: {
            const task = store.tasksMap[action.payload.taskId];
            return setTaskValue(store, task, 'suggested', !task.suggested);
        }
        case constants.SHARE_TASK:
            // TODO
            return store;
        default:
            return store;
    }
};

const setTaskValue = (store: Store, task: Task, property: string, value: string | boolean): Store => {
    return {
        ...store,
        tasksMap: {
            ...store.tasksMap,
            [task.id]: {
                ...task,
                [property]: value,
            },
        },
    };
};
