import {action, observable} from 'mobx';

export default class PathwaysStore {
    @observable PATHWAYS = [
        {
            id: 'first-days-canada',
            label: "My first days in Canada",
            description: "Some helpful text about this pathway. For example, we might talk about the benefits of completing these actions.",
            icon: "icons:event",
            actions: [
                {
                    id: 'action-1',
                    label: "Pathway action 1",
                    search: null,
                    completed: true
                },
                {
                    id: 'action-2',
                    label: "Pathway action 2",
                    search: null,
                    completed: true
                },
                {
                    id: 'action-3',
                    label: "Pathway action 3",
                    search: null,
                    completed: true
                }
            ]
        },
        {
            id: 'improve-my-english',
            label: "Improve my English",
            description: "Some helpful text about this pathway. For example, we might talk about the benefits of completing these actions.",
            icon: "communication:chat",
            actions: [
                {
                    id: 'action-1',
                    label: "Pathway action 1",
                    search: {what: 'EDUCATION', 'why': 'language (english)'},
                    completed: true
                },
                {
                    id: 'action-2',
                    label: "Pathway action 2",
                    search: null,
                    completed: true
                },
                {
                    id: 'action-3',
                    label: "Pathway action 3",
                    search: null,
                    completed: true
                },
                {
                    id: 'action-4',
                    label: "Pathway action 4",
                    search: null,
                    completed: true
                },
                {
                    id: 'action-5',
                    label: "Pathway action 5",
                    search: null,
                    completed: true
                }
            ]
        },
        {
            id: 'find-employment',
            label: "Find Employment",
            description: "Some helpful text about this pathway. For example, we might talk about the benefits of completing these actions.",
            icon: "icons:work",
            focus: true,
            actions: [
                {
                    id: 'action-1',
                    label: "Find volunteer opportunities in my field",
                    search: {what: 'EMPLOYMENT'},
                    completed: true
                },
                {
                    id: 'action-2',
                    label: "Get professional qualifications assessed",
                    search: {what: 'EMPLOYMENT'}
                },
                {
                    id: 'action-3',
                    label: "Connect with a mentor",
                    search: {what: 'EMPLOYMENT'}
                },
                {
                    id: 'action-4',
                    label: "Prepare cover letter, resume, and LinkedIn",
                    search: {what: 'EMPLOYMENT'}
                },
                {
                    id: 'action-5',
                    label: "Talk to a settlement counsellor about my job search",
                    search: {what: 'EMPLOYMENT'}
                }
            ]
        },
    ];

    pathwayIds() {
        return this.PATHWAYS.map(pathway => pathway.id);
    }

    allPathwayDetails() {
        return this.pathwayIds().map(pathwayId => this.pathwayDetails(pathwayId));
    }

    pathwayDetails(pathwayId) {
        const pathway = this.PATHWAYS.find(pathway => pathway.id === pathwayId);
        return {
            ...pathway,
            url: `/pathways/${pathway.id}`,
            progress: this._pathwayProgress(pathway)
        }
    }

    pathwayActions(pathwayId) {
        return this.pathwayDetails(pathwayId).actions || [];
    }

    @action
    setActionCompleted(pathwayId, actionId, completed) {
        const pathway = this.PATHWAYS.find(pathway => pathway.id === pathwayId);
        const action = pathway.actions.find(pathway => pathway.id === actionId);
        action.completed = completed;
    }

    _pathwayProgress(pathway) {
        const actions = pathway.actions || [];
        const completed = actions.filter(action => action.completed === true).length;
        const total = actions.length;
        if (total > 0) {
            return completed / total;
        } else {
            return 1;
        }
    }
}
