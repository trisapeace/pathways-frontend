// tslint:disable:readonly-keyword
// tslint:disable:no-this
// tslint:disable:no-expression-statement
// tslint:disable:readonly-array
// tslint:disable:no-class

import * as store from '../../tasks';
import { aString, aBoolean, aNumber } from '../../../application/__tests__/helpers/random_test_values';

export class TaskDefinitionBuilder {
    id: string = aString();
    title: string = aString();
    description: string = aString();
    tags: ReadonlyArray<string> = [aString(), aString()];
    category: string = aString();
    importance: number = aNumber();

    withId(id: string): TaskDefinitionBuilder {
        this.id = id;
        return this;
    }

    withTitle(title: string): TaskDefinitionBuilder {
        this.title = title;
        return this;
    }

    withDescription(description: string): TaskDefinitionBuilder {
        this.description = description;
        return this;
    }

    withTags(tags: ReadonlyArray<string>): TaskDefinitionBuilder {
        this.tags = tags;
        return this;
    }

    withCategory(category: string): TaskDefinitionBuilder {
        this.category = category;
        return this;
    }

    withImportance(importance: number): TaskDefinitionBuilder {
        this.importance = importance;
        return this;
    }

    build(): TaskDefinitionBuilder {
        return this;
    }
}

export class TaskBuilder {
    id: string = aString();
    taskDefinitionId: string = undefined;
    starred: boolean = aBoolean();
    completed: boolean = aBoolean();
    suggested: boolean = aBoolean();

    constructor(taskDefinitionId: string) {
        this.taskDefinitionId = taskDefinitionId;
        return this;
    }

    withId(id: string): TaskBuilder {
        this.id = id;
        return this;
    }

    withStarred(starred: boolean): TaskBuilder {
        this.starred = starred;
        return this;
    }

    withCompleted(completed: boolean): TaskBuilder {
        this.completed = completed;
        return this;
    }

    withSuggested(suggested: boolean): TaskBuilder {
        this.suggested = suggested;
        return this;
    }

    build(): TaskBuilder {
        return this;
    }
}

export const buildPopulatedNormalizedStore = (): store.Store => {
    const firstTaskDefinition = new TaskDefinitionBuilder();
    const secondTaskDefinition = new TaskDefinitionBuilder();
    const firstTask = new TaskBuilder(firstTaskDefinition.id);
    const secondTask = new TaskBuilder(secondTaskDefinition.id);
    const taskDefinitions: ReadonlyArray<TaskDefinitionBuilder> = [firstTaskDefinition, secondTaskDefinition];
    const tasks = [firstTask, secondTask];
    const suggestedTasks = [secondTask];
    return buildNormalizedStore(taskDefinitions, tasks, suggestedTasks);
};

export const buildNormalizedStore = (taskDefinitions: ReadonlyArray<TaskDefinitionBuilder>,
                                     tasks: ReadonlyArray<TaskBuilder>,
                                     suggestedTasks: ReadonlyArray<TaskBuilder>): store.Store => (
    {
        taskDefinitionsMap: buildTaskDefinitionsMap(taskDefinitions),
        tasksMap: buildTasksMap(tasks),
        suggestedTasksMap: buildTasksMap(suggestedTasks),
    }
);

const buildTasksMap = (tasks: ReadonlyArray<TaskBuilder>): store.TasksMap => {
    const buildAndMapToIds = (map: store.TasksMap, builder: TaskBuilder): store.TasksMap => {
        return { ...map, [builder.id]: builder.build() };
    };
    return tasks.reduce(buildAndMapToIds, {});
};

const buildTaskDefinitionsMap = (taskDefinitions: ReadonlyArray<TaskDefinitionBuilder>): store.TaskDefinitionsMap => {
    const buildAndMapToIds = (map: store.TaskDefinitionsMap,
                              builder: TaskDefinitionBuilder): store.TaskDefinitionsMap => {
        return { ...map, [builder.id]: builder.build() };
    };
    return taskDefinitions.reduce(buildAndMapToIds, {});
};
