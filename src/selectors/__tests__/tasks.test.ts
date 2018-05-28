// tslint:disable:no-expression-statement
// tslint:disable:no-let
// tslint:disable:no-any

import * as helpers from '../../stores/__tests__/helpers/tasks_helpers';
import * as selector from '../tasks';
import * as stores from '../../stores/tasks';

describe('tasks selector', () => {

    describe ('denormalization', () => {
        let task: stores.Task;
        let taskUserSettings: stores.TaskUserSettings;
        let denormalizedTask: selector.Task;

        beforeEach(() => {
            task = new helpers.TaskBuilder().build();
            taskUserSettings = new helpers.TaskUserSettingsBuilder(task.id).build();
            denormalizedTask = selector.denormalizeTask(task, taskUserSettings);
        });

        test('id property', () => {
            expect(denormalizedTask.id).toBe(task.id);
        });

        test('completed property', () => {
            expect(denormalizedTask.completed).toBe(taskUserSettings.completed);
        });

        test('starred property', () => {
            expect(denormalizedTask.starred).toBe(taskUserSettings.starred);
        });

        test('title property', () => {
            expect(denormalizedTask.title).toBe(task.title);
        });

        test('description property', () => {
            expect(denormalizedTask.description).toBe(task.description);
        });

        test('category property', () => {
            expect(denormalizedTask.category).toBe(task.category);
        });

        test('importance property', () => {
            expect(denormalizedTask.importance).toBe(task.importance);
        });

        test('tags property', () => {
            expect(denormalizedTask.tags).toBe(task.tags);
        });
    });

    describe('data retrieval', ()  => {
        let store: stores.Store;

        beforeEach(() => {
            store = helpers.buildPopulatedNormalizedStore();
        });

        test('returns all saved tasks', () => {
            expect(Object.keys(selector.selectAllSavedTasks(store))).toHaveLength(2);
        });

        test('returns all suggested tasks', () => {
            expect(Object.keys(selector.selectAllSuggestedTasks(store))).toHaveLength(1);
        });
    });
});
