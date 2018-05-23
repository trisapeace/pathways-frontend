// tslint:disable:no-expression-statement
// tslint:disable:no-let
// tslint:disable:no-any

import * as helpers from '../../stores/__tests__/helpers/tasks_helpers';
import * as selector from '../tasks';
import * as stores from '../../stores/tasks';

describe('tasks selector', () => {

    describe ('denormalization', () => {
        let taskDefinition: helpers.TaskDefinitionBuilder;
        let task: helpers.TaskBuilder;
        let denormalizedTask: selector.Task;

        beforeEach(() => {
            taskDefinition = new helpers.TaskDefinitionBuilder();
            task = new helpers.TaskBuilder(taskDefinition.id);
            denormalizedTask = selector.denormalizeTask(task, taskDefinition);
        });

        test('id property', () => {
            expect(denormalizedTask.id).toBe(task.id);
        });

        test('completed property', () => {
            expect(denormalizedTask.completed).toBe(task.completed);
        });

        test('suggested property', () => {
            expect(denormalizedTask.suggested).toBe(task.suggested);
        });

        test('starred property', () => {
            expect(denormalizedTask.starred).toBe(task.starred);
        });

        test('title property', () => {
            expect(denormalizedTask.title).toBe(taskDefinition.title);
        });

        test('description property', () => {
            expect(denormalizedTask.description).toBe(taskDefinition.description);
        });

        test('category property', () => {
            expect(denormalizedTask.category).toBe(taskDefinition.category);
        });

        test('importance property', () => {
            expect(denormalizedTask.importance).toBe(taskDefinition.importance);
        });

        test('tags property', () => {
            expect(denormalizedTask.tags).toBe(taskDefinition.tags);
        });
    });

    describe('data retrieval', ()  => {
        let store: stores.Store;

        beforeEach(() => {
            store = helpers.buildPopulatedNormalizedStore();
        });

        test('returns all tasks', () => {
            expect(selector.selectTasks(store)).toHaveLength(2);
        });

        test('returns all suggested tasks', () => {
            expect(selector.selectSuggestedTasks(store)).toHaveLength(1);
        });
    });
});
