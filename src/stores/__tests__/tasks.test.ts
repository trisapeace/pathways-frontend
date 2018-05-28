// tslint:disable:no-expression-statement
// tslint:disable:no-let

import * as helpers from '../../stores/__tests__/helpers/tasks_helpers';
import * as stores from '../tasks';

describe('tasks reducer', () => {

    describe('task lists & settings', () => {
        let store: stores.Store;

        beforeEach(() => {
            store = helpers.buildPopulatedNormalizedStore();
        });

        test('can add task to saved tasks list', () => {
            const task = new helpers.TaskBuilder().build();
            const finalStore = stores.reducer(store, stores.addToSavedList(task.id));
            const expectedLength = Object.keys(store.savedTasksList).length + 1;
            expect(finalStore.savedTasksList).toHaveLength(expectedLength);
        });

        test('can add task to suggested tasks list', () => {
            const task = new helpers.TaskBuilder().build();
            const finalStore = stores.reducer(store, stores.addToSuggestedList(task.id));
            const expectedLength = Object.keys(store.suggestedTasksList).length + 1;
            expect(finalStore.savedTasksList).toHaveLength(expectedLength);
        });

        test('can remove task from saved tasks list', () => {
            const finalStore = stores.reducer(store, stores.removeFromSavedList(store.savedTasksList[0]));
            const expectedLength = Object.keys(store.savedTasksList).length - 1;
            expect(finalStore.savedTasksList).toHaveLength(expectedLength);
        });

        test('can remove task from suggested tasks list', () => {
            const finalStore = stores.reducer(store, stores.removeFromSuggestedList(store.suggestedTasksList[0]));
            const expectedLength = Object.keys(store.suggestedTasksList).length - 1;
            expect(finalStore.suggestedTasksList).toHaveLength(expectedLength);
        });

        test('can toggle a task completed', () => {
            const taskUserSettingsId = Object.keys(store.taskUserSettingsMap)[0];
            const oldValue = store.taskUserSettingsMap[taskUserSettingsId].completed;
            const finalStore = stores.reducer(store, stores.toggleCompleted(taskUserSettingsId));
            expect(finalStore.taskUserSettingsMap[taskUserSettingsId].completed).toEqual(!oldValue);
        });

        test('can toggle a task starred', () => {
            const taskUserSettingsId = Object.keys(store.taskUserSettingsMap)[0];
            const oldValue = store.taskUserSettingsMap[taskUserSettingsId].starred;
            const finalStore = stores.reducer(store, stores.toggleStarred(taskUserSettingsId));
            expect(finalStore.taskUserSettingsMap[taskUserSettingsId].starred).toEqual(!oldValue);
        });
    });
});