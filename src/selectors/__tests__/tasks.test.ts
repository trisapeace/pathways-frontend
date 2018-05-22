// tslint:disable:no-expression-statement
// tslint:disable:no-let
// tslint:disable:no-any

import * as models from '../../stores/tasks';
import * as selector from '../tasks';
import { buildTasksFixture } from '../../fixtures/tasks';

describe('tasks selector', () => {
    const store: models.Store = buildTasksFixture();

    it('can select tasks', () => {
        const tasksExpectedCount = Object.keys(store.tasks).length;
        const tasks = selector.selectTasks(store);
        expect(tasks).toHaveLength(tasksExpectedCount);
    });

    it('can select suggested tasks', () => {
        const tasksExpectedCount = Object.keys(store.suggestedTasks).length;
        const tasks = selector.selectSuggestedTasks(store);
        expect(tasks).toHaveLength(tasksExpectedCount);
    });

    it('can convert from normalized task & definition structure to task view model structure', () => {
        const task1 = store.tasks.t1;
        const task1Definition = store.taskDefinitions[task1.taskDefinitionId];
        const taskViewModel = selector.taskModelsToView(task1, task1Definition);

        expect(taskViewModel).toHaveProperty('id');
        expect(taskViewModel).toHaveProperty('title');
        expect(taskViewModel).toHaveProperty('description');
        expect(taskViewModel).toHaveProperty('category');
        expect(taskViewModel).toHaveProperty('importance');
        expect(taskViewModel).toHaveProperty('starred');
        expect(taskViewModel).toHaveProperty('completed');
        expect(taskViewModel).toHaveProperty('suggested');
        expect(taskViewModel).toHaveProperty('tags');
    });

    it('can convert from task view model structure to normalized task structure', () => {
        const taskViewModel = selector.selectTasks(store)[0];
        const task = selector.taskViewToTask(taskViewModel);

        expect(task).toHaveProperty('id');
        expect(task).toHaveProperty('taskDefinitionId');
        expect(task).toHaveProperty('starred');
        expect(task).toHaveProperty('completed');
        expect(task).toHaveProperty('suggested');
    });

});
