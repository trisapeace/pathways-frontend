import { buildTasksFixture, Store } from '../fixtures/tasks';

export { Id, Store, Task, TaskDefinition } from '../fixtures/tasks';

const buildDefaultStore = (): Store => (
    buildTasksFixture()
);

// TODO
export const reducer = (store: Store = buildDefaultStore(), action?: any): Store => {
 return store;
};