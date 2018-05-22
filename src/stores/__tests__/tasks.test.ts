// tslint:disable:no-expression-statement
// tslint:disable:no-let

import * as stores from '../tasks';

describe('tasks reducer', () => {
    const fakeTask: stores.Task = {
        'id': 'fake1',
        'taskDefinitionId': 'fake1Definition',
        'starred': false,
        'completed': false,
        'suggested': false,
    };
    const initialStore: stores.Store = stores.reducer(
        {tasks: {}, taskDefinitions: {}, suggestedTasks: {}},
        stores.addToTaskList(fakeTask),
    );

    it('can add tasks to tasks list', () => {
        expect(initialStore.tasks.fake1).toEqual(fakeTask);
        expect(Object.keys(initialStore.tasks)).toHaveLength(1);
    });

    it('can remove tasks from tasks list', () => {
        const finalStore = stores.reducer(initialStore, stores.removeFromTaskList(fakeTask.id));
        expect(Object.keys(initialStore.tasks)).toHaveLength(1);
        expect(Object.keys(finalStore.tasks)).toHaveLength(0);
    });

    it('can toggle task as complete', () => {
        const finalStore = stores.reducer(initialStore, stores.toggleTaskCompleted(fakeTask.id));
        expect(finalStore.tasks[fakeTask.id].completed).toEqual(true);
    });

    it('can toggle task as starred', () => {
        const finalStore = stores.reducer(initialStore, stores.toggleTaskStarred(fakeTask.id));
        expect(finalStore.tasks[fakeTask.id].starred).toEqual(true);
    });

    it('can toggle task as suggested', () => {
        const finalStore = stores.reducer(initialStore, stores.toggleTaskSuggested(fakeTask.id));
        expect(finalStore.tasks[fakeTask.id].suggested).toEqual(true);
    });
});