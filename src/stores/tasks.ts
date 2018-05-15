import { buildTasksFixture, Store, Task, Id } from '../fixtures/tasks';
import * as constants from '../application/constants';
import * as helpers from './helpers/make_action';

export { Id, Store, Task, TaskDefinition } from '../fixtures/tasks';

export type AddToTaskListAction = Readonly<ReturnType<typeof addToTaskList>>;
export type RemoveFromTaskListAction = Readonly<ReturnType<typeof removeFromTaskList>>;
export type TasksAction = AddToTaskListAction & RemoveFromTaskListAction;

// tslint:disable-next-line:typedef
export const addToTaskList = (taskId: Id) => (
    helpers.makeAction(constants.ADD_TO_TASK_LIST, { taskId })
);

// tslint:disable-next-line:typedef
export const removeFromTaskList = (taskId: Id) => (
    helpers.makeAction(constants.REMOVE_FROM_TASK_LIST, { taskId })
);

const buildDefaultStore = (): Store => (
    buildTasksFixture()
);

export const reducer = (store: Store = buildDefaultStore(), action?: TasksAction): Store => {
    if (!action) {
        return store;
    }
    switch (action.type) {
        case constants.ADD_TO_TASK_LIST:
        case constants.REMOVE_FROM_TASK_LIST:
        default:
            return store;
    }
};

const setTaskProperty = (store: Store, task: Task, property: string, value: string | boolean | number): Store => {
    return {
        ...store,
        tasks: {
            ...store.tasks,
            [task.id]: {
                ...task,
                [property]: value,
            },
        },
    };
};