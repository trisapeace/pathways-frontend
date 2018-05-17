import { buildTasksFixture, Store, Task, Id } from '../fixtures/tasks';
import * as constants from '../application/constants';
import * as helpers from './helpers/make_action';

export { Id, Store, Task, Tasks, TaskDefinition, TaskDefinitions } from '../fixtures/tasks';

export type AddToTaskListAction = Readonly<ReturnType<typeof addToTaskList>>;
export type RemoveFromTaskListAction = Readonly<ReturnType<typeof removeFromTaskList>>;
export type TasksAction = AddToTaskListAction | RemoveFromTaskListAction;

// tslint:disable-next-line:typedef
export const addToTaskList = (task: Task) => (
    helpers.makeAction(constants.ADD_TO_TASK_LIST, task)
);

// tslint:disable-next-line:typedef
export const removeFromTaskList = (taskId: Id) => (
    helpers.makeAction(constants.REMOVE_FROM_TASK_LIST, taskId)
);

export const buildDefaultStore = (): Store => (
    buildTasksFixture()
);

export const reducer = (store: Store = buildDefaultStore(), action?: TasksAction): Store => {
    if (!action) {
        return store;
    }
    switch (action.type) {
        case constants.ADD_TO_TASK_LIST:
            return {
                ...store,
                tasks: {
                    ...store.tasks,
                    [action.payload.id]: action.payload,
                },
            };
        case constants.REMOVE_FROM_TASK_LIST:
            const tasks = { ...store.tasks };
            // tslint:disable-next-line:no-expression-statement
            delete(tasks[action.payload]);
            return { ...store, tasks };
        default:
            return store;
    }
};
