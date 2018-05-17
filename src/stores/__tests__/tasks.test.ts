// tslint:disable:no-expression-statement
// tslint:disable:no-let

import * as models from '../tasks';

describe('tasks reducer', () => {
    const emptyStore: models.Store = {tasks: {}, taskDefinitions: {}};

    it('can add tasks to tasks list', () => {
        let task1: models.Task = {
            'id': 't1',
            'taskDefinitionId': 'td1',
            'starred': false,
            'completed': false,
            'suggested': true,
        };
        const initialStore = models.reducer(emptyStore, models.addToTaskList(task1));

        expect(initialStore.tasks.t1).toEqual(task1);
        expect(Object.keys(initialStore.tasks)).toHaveLength(1);
    });

    it('can remove tasks from tasks list', () => {
        let task1: models.Task = {
            'id': 't1',
            'taskDefinitionId': 'td1',
            'starred': false,
            'completed': false,
            'suggested': true,
        };
        const initialStore = models.reducer(emptyStore, models.addToTaskList(task1));
        const finalStore = models.reducer(initialStore, models.removeFromTaskList('t1'));

        expect(Object.keys(initialStore.tasks)).toHaveLength(1);
        expect(Object.keys(finalStore.tasks)).toHaveLength(0);
    });
});