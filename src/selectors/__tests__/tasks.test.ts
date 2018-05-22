// tslint:disable:no-expression-statement
// tslint:disable:no-let
// tslint:disable:no-any

import * as stores from '../../stores/tasks';
import * as selector from '../tasks';
import { buildTasksFixture } from '../../fixtures/tasks';

describe('tasks selector', () => {
    const store: stores.Store = buildTasksFixture();

    it('can select tasks', () => {
        const tasksExpectedCount = Object.keys(store.tasksMap).length;
        const tasks = selector.selectTasks(store);
        expect(tasks).toHaveLength(tasksExpectedCount);
    });

    it('can select suggested tasks', () => {
        const tasksExpectedCount = Object.keys(store.suggestedTasksMap).length;
        const tasks = selector.selectSuggestedTasks(store);
        expect(tasks).toHaveLength(tasksExpectedCount);
    });

    it('can convert normalized task & definition to denormalized task', () => {
        const task = store.tasksMap.t1;
        const taskDefinition = store.taskDefinitionsMap[task.taskDefinitionId];
        const denormalizedTask = selector.denormalizeTask(task, taskDefinition);

        expect(denormalizedTask).toHaveProperty('id');
        expect(denormalizedTask).toHaveProperty('title');
        expect(denormalizedTask).toHaveProperty('description');
        expect(denormalizedTask).toHaveProperty('category');
        expect(denormalizedTask).toHaveProperty('importance');
        expect(denormalizedTask).toHaveProperty('starred');
        expect(denormalizedTask).toHaveProperty('completed');
        expect(denormalizedTask).toHaveProperty('suggested');
        expect(denormalizedTask).toHaveProperty('tags');
    });

    it('can convert denormalized task to normalized task structure', () => {
        const denormalizedTask = selector.selectTasks(store)[0];
        const task = selector.normalizeTask(denormalizedTask);

        expect(task).toHaveProperty('id');
        expect(task).toHaveProperty('taskDefinitionId');
        expect(task).toHaveProperty('starred');
        expect(task).toHaveProperty('completed');
        expect(task).toHaveProperty('suggested');
    });

});
