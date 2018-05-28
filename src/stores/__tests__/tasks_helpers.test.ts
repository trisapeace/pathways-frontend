// tslint:disable:no-expression-statement
// tslint:disable:no-let

import * as helpers from './helpers/tasks_helpers';
import * as stores from '../../stores/tasks';
import { aString, aBoolean, aNumber } from '../../application/__tests__/helpers/random_test_values';

describe('tasks test helpers', () => {

    describe('building the task', () => {

        test('id property', () => {
            const id = aString();
            const task = new helpers.TaskBuilder().withId(id).build();
            expect(task.id).toBe(id);
        });

        test('title property', () => {
            const title = aString();
            const task = new helpers.TaskBuilder().withTitle(title).build();
            expect(task.title).toBe(title);
        });

        test('description property', () => {
            const description = aString();
            const task = new helpers.TaskBuilder().withDescription(description).build();
            expect(task.description).toBe(description);
        });

        test('tags property', () => {
            const tags: ReadonlyArray<string> = [aString(), aString()];
            const task = new helpers.TaskBuilder().withTags(tags).build();
            expect(task.tags).toBe(tags);
        });

        test('category property', () => {
            const category = aString();
            const task = new helpers.TaskBuilder().withCategory(category).build();
            expect(task.category).toBe(category);
        });

        test('importance property', () => {
            const importance = aNumber();
            const task = new helpers.TaskBuilder().withImportance(importance).build();
            expect(task.importance).toBe(importance);
        });
    });

    describe('building the task user settings', () => {

        describe('with properties', () => {
            let taskId: string;

            beforeEach(() => {
               taskId = aString();
            });

            test('task id property', () => {
                const taskUserSettings = new helpers.TaskUserSettingsBuilder(taskId).build();
                expect(taskUserSettings.taskId).toBe(taskId);
            });

            test('id property', () => {
                const id = aString();
                const taskUserSettings = new helpers.TaskUserSettingsBuilder(taskId).withId(id).build();
                expect(taskUserSettings.id).toBe(id);
            });

            test('starred property', () => {
                const starred = aBoolean();
                const taskUserSettings = new helpers.TaskUserSettingsBuilder(taskId).withStarred(starred).build();
                expect(taskUserSettings.starred).toBe(starred);
            });

            test('completed property', () => {
                const completed = aBoolean();
                const taskUserSettings = new helpers.TaskUserSettingsBuilder(taskId).withCompleted(completed).build();
                expect(taskUserSettings.completed).toBe(completed);
            });
        });
    });

    describe('the store', () => {

        describe('building a normalized store', () => {
            let firstTaskBuilder: helpers.TaskBuilder;
            let secondTaskBuilder: helpers.TaskBuilder;
            let firstTaskUserSettingsBuilder: helpers.TaskUserSettingsBuilder;
            let secondTaskUserSettingsBuilder: helpers.TaskUserSettingsBuilder;
            let store: stores.Store;

            beforeEach(() => {
                firstTaskBuilder = new helpers.TaskBuilder();
                secondTaskBuilder = new helpers.TaskBuilder();
                firstTaskUserSettingsBuilder = new helpers.TaskUserSettingsBuilder(firstTaskBuilder.build().id);
                secondTaskUserSettingsBuilder = new helpers.TaskUserSettingsBuilder(secondTaskBuilder.build().id);
                store = helpers.buildNormalizedStore(
                    [firstTaskBuilder, secondTaskBuilder],
                    [firstTaskUserSettingsBuilder, secondTaskUserSettingsBuilder],
                    [firstTaskBuilder.build().id],
                    [secondTaskBuilder.build().id],
                );
            });

            test('task map property', () => {
                expect(store).toHaveProperty('taskMap');
            });

            test('task user settings map property', () => {
                expect(store).toHaveProperty('taskUserSettingsMap');
            });

            test('saved tasks list property', () => {
                expect(store).toHaveProperty('savedTasksList');
            });

            test('suggested tasks list property', () => {
                expect(store).toHaveProperty('suggestedTasksList');
            });

            test('tasks map keys are expected task ids', () => {
                expect(Object.keys(store.taskMap)).toEqual([firstTaskBuilder.build().id, secondTaskBuilder.build().id]);
            });

            test('task user settings map keys are expected task user settings ids', () => {
                const expectedIds: ReadonlyArray<stores.Id> = [
                    firstTaskUserSettingsBuilder.build().id,
                    secondTaskUserSettingsBuilder.build().id,
                ];
                expect(Object.keys(store.taskUserSettingsMap)).toEqual(expectedIds);
            });
        });

        describe('building a prepopulated normalized store', () => {
            let store: stores.Store;

            beforeEach(() => {
                store = helpers.buildPopulatedNormalizedStore();
            });

            test('store contains three tasks', () => {
                expect(Object.keys(store.taskMap)).toHaveLength(3);
            });

            test('store contains three task user settings', () => {
                expect(Object.keys(store.taskUserSettingsMap)).toHaveLength(3);
            });

            test('store contains two saved tasks', () => {
                expect(Object.keys(store.savedTasksList)).toHaveLength(2);
            });

            test('store contains one suggested task', () => {
                expect(Object.keys(store.suggestedTasksList)).toHaveLength(1);
            });
        });
    });
});
