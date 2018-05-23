// tslint:disable:no-expression-statement
// tslint:disable:no-let

import * as helpers from './helpers/tasks_helpers';
import * as stores from '../../stores/tasks';
import { aString, aBoolean, aNumber } from '../../application/__tests__/helpers/random_test_values';

describe('tasks test helpers', () => {

    describe('building the task definition', () => {

        let id: string;
        let title: string;
        let description: string;
        let tags: ReadonlyArray<string>;
        let category: string;
        let importance: number;
        let taskDefinition: helpers.TaskDefinitionBuilder;

        beforeEach(() => {
            id = aString();
            title = aString();
            description = aString();
            tags = [aString(), aString()];
            category = aString();
            importance = aNumber();
            taskDefinition = new helpers.TaskDefinitionBuilder()
                .withId(id)
                .withTitle(title)
                .withDescription(description)
                .withTags(tags)
                .withCategory(category)
                .withImportance(importance)
                .build();
        });

        test('id property', () => {
            expect(taskDefinition.id).toBe(id);
        });

        test('title property', () => {
            expect(taskDefinition.title).toBe(title);
        });

        test('description property', () => {
            expect(taskDefinition.description).toBe(description);
        });

        test('tags property', () => {
            expect(taskDefinition.tags).toBe(tags);
        });

        test('category property', () => {
            expect(taskDefinition.category).toBe(category);
        });

        test('importance property', () => {
            expect(taskDefinition.importance).toBe(importance);
        });
    });

    describe('building the task', () => {

        describe('with properties', () => {
            let id: string;
            let taskDefinitionId: string;
            let starred: boolean;
            let completed: boolean;
            let suggested: boolean;
            let task: helpers.TaskBuilder;

            beforeEach(() => {
                id = aString();
                taskDefinitionId = aString();
                starred = aBoolean();
                completed = aBoolean();
                suggested = aBoolean();
                task = new helpers.TaskBuilder(taskDefinitionId)
                    .withId(id)
                    .withStarred(starred)
                    .withCompleted(completed)
                    .withSuggested(suggested)
                    .build();
            });

            test('id property', () => {
                expect(task.id).toBe(id);
            });

            test('task definition id property', () => {
                expect(task.taskDefinitionId).toBe(taskDefinitionId);
            });

            test('starred property', () => {
                expect(task.starred).toBe(starred);
            });

            test('completed property', () => {
                expect(task.completed).toBe(completed);
            });

            test('suggested property', () => {
                expect(task.suggested).toBe(suggested);
            });
        });
    });

    describe('the store', () => {

        describe('building a normalized store', () => {
            let taskDefinition: helpers.TaskDefinitionBuilder;
            let task: helpers.TaskBuilder;
            let store: stores.Store;

            beforeEach(() => {
                taskDefinition = new helpers.TaskDefinitionBuilder();
                task = new helpers.TaskBuilder(taskDefinition.id);
                store = helpers.buildNormalizedStore([taskDefinition], [task], [task]);
            });

            test('task definitions map property', () => {
                expect(store).toHaveProperty('taskDefinitionsMap');
            });

            test('tasks map property', () => {
                expect(store).toHaveProperty('tasksMap');
            });

            test('suggested tasks map property', () => {
                expect(store).toHaveProperty('suggestedTasksMap');
            });

            test('tasks map keys are expected task ids', () => {
                expect(Object.keys(store.tasksMap)).toEqual([task.id]);
            });

            test('task definitions map keys are expected task definitions ids', () => {
                expect(Object.keys(store.taskDefinitionsMap)).toEqual([taskDefinition.id]);
            });
        });

        describe('building a prepopulated normalized store', () => {
            let store: stores.Store;

            beforeEach(() => {
                store = helpers.buildPopulatedNormalizedStore();
            });

            test('store contains two task definitions', () => {
                expect(Object.keys(store.taskDefinitionsMap)).toHaveLength(2);
            });

            test('store contains two tasks', () => {
                expect(Object.keys(store.tasksMap)).toHaveLength(2);
            });

            test('store contains one suggested task', () => {
                expect(Object.keys(store.suggestedTasksMap)).toHaveLength(1);
            });
        });
    });
});
