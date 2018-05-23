// tslint:disable:no-expression-statement
// tslint:disable:no-let

import * as helpers from '../../stores/__tests__/helpers/tasks_helpers';
import * as stores from '../tasks';

describe('tasks reducer', () => {
    let taskDefinition: helpers.TaskDefinitionBuilder;
    let task: helpers.TaskBuilder;
    let store: stores.Store;

    beforeEach(() => {
        taskDefinition = new helpers.TaskDefinitionBuilder();
        task = new helpers.TaskBuilder(taskDefinition.id);
        store = helpers.buildNormalizedStore([taskDefinition], [task], [task]);
    });

    test('can add task to tasks list', () => {
        const newTaskDefinition = new helpers.TaskDefinitionBuilder();
        const newTask = new helpers.TaskBuilder(newTaskDefinition.id);
        const finalStore = stores.reducer(store, stores.addToTaskList(newTask));
        const expectedLength = Object.keys(store.tasksMap).length + 1;
        expect(Object.keys(finalStore.tasksMap)).toHaveLength(expectedLength);
    });

    test('can remove task from tasks list', () => {
       const finalStore = stores.reducer(store, stores.removeFromTaskList(task.id));
       const expectedLength = Object.keys(store.tasksMap).length - 1;
       expect(Object.keys(finalStore.tasksMap)).toHaveLength(expectedLength);
    });

    test('can toggle task as complete', () => {
        const finalStore = stores.reducer(store, stores.toggleTaskCompleted(task.id));
        const expectedValue = !store.tasksMap[task.id].completed;
        expect(finalStore.tasksMap[task.id].completed).toEqual(expectedValue);
    });

    test('can toggle task as starred', () => {
        const finalStore = stores.reducer(store, stores.toggleTaskStarred(task.id));
        const expectedValue = !store.tasksMap[task.id].starred;
        expect(finalStore.tasksMap[task.id].starred).toEqual(expectedValue);
    });

    test('can toggle task as suggested', () => {
        const finalStore = stores.reducer(store, stores.toggleTaskSuggested(task.id));
        const expectedValue = !store.tasksMap[task.id].suggested;
        expect(finalStore.tasksMap[task.id].suggested).toEqual(expectedValue);
    });
});