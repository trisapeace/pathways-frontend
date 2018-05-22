// tslint:disable:no-expression-statement
// tslint:disable:no-let

import * as models from '../tasks';

describe('tasks reducer', () => {
    const fakeTask: models.Task = {
        'id': 'fake1',
        'taskDefinitionId': 'fake1Definition',
        'starred': false,
        'completed': false,
        'suggested': false,
    };
    const initialStore: models.Store = models.reducer(
        {tasks: {}, taskDefinitions: {}, suggestedTasks: {}},
        models.addToTaskList(fakeTask),
    );

    it('can add tasks to tasks list', () => {
        expect(initialStore.tasks.fake1).toEqual(fakeTask);
        expect(Object.keys(initialStore.tasks)).toHaveLength(1);
    });

    it('can remove tasks from tasks list', () => {
        const finalStore = models.reducer(initialStore, models.removeFromTaskList(fakeTask.id));
        expect(Object.keys(initialStore.tasks)).toHaveLength(1);
        expect(Object.keys(finalStore.tasks)).toHaveLength(0);
    });

    it('can toggle task as complete', () => {
        const finalStore = models.reducer(initialStore, models.toggleTaskCompleted(fakeTask.id));
        expect(finalStore.tasks[fakeTask.id].completed).toEqual(true);
    });

    it('can toggle task as starred', () => {
        const finalStore = models.reducer(initialStore, models.toggleTaskStarred(fakeTask.id));
        expect(finalStore.tasks[fakeTask.id].starred).toEqual(true);
    });

    it('can toggle task as suggested', () => {
        const finalStore = models.reducer(initialStore, models.toggleTaskSuggested(fakeTask.id));
        expect(finalStore.tasks[fakeTask.id].suggested).toEqual(true);
    });
});