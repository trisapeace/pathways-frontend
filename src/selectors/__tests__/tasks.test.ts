// tslint:disable:no-expression-statement
// tslint:disable:no-let
// tslint:disable:no-any

import * as models from '../../stores/tasks';
import * as selector from '../tasks';
import { buildTasksFixture } from '../../fixtures/tasks';

describe('tasks selector', () => {
    const store: models.Store = buildTasksFixture();

    it('returns tasks in expected denormalized format', () => {
        const firstTask = selector.selectTasks(store)[0];

        expect(firstTask).toHaveProperty('id');
        expect(firstTask).toHaveProperty('title');
        expect(firstTask).toHaveProperty('description');
        expect(firstTask).toHaveProperty('category');
        expect(firstTask).toHaveProperty('importance');
        expect(firstTask).toHaveProperty('starred');
        expect(firstTask).toHaveProperty('completed');
        expect(firstTask).toHaveProperty('suggested');
        expect(firstTask).toHaveProperty('tags');
    });
});