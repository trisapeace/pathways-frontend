import React from 'react';

import PropTypes from 'prop-types';

import {inject, observer} from 'mobx-react';

import SimpleAppView from 'ui-components/SimpleAppView';

import PathwayActionCard from 'components/PathwayActionCard';

import {PaperCard} from 'polymer/paper-card';

@inject('pathwaysStore')
@observer
class PathwayDetailView_Main extends React.Component {
    static propTypes = {
        match: PropTypes.object,
        pathwaysStore: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            selectedActionId: undefined
        };
    }

    render() {
        const {match, pathwaysStore} = this.props;
        const {pathwayId} = match.params;

        const pathwayDetails = pathwaysStore.pathwayDetails(pathwayId);
        const actions = pathwaysStore.pathwayActions(pathwayId);

        return (
            <div>
                <PaperCard className="full-card">
                    <div className="card-content">
                        <p>{pathwayDetails.description}</p>
                    </div>
                </PaperCard>
                {
                    actions.map(
                        (action) => (
                            <PathwayActionCard
                                key={action.id}
                                pathwayAction={action}
                                opened={this.state.selectedActionId === action.id}
                                onActionComplete={this._onActionComplete.bind(this)}
                                onSelect={this._onActionSelect.bind(this)}
                            />
                        )
                    )
                }
            </div>
        );
    }

    _onActionComplete(actionId, completed) {
        const {match, pathwaysStore} = this.props;
        const {pathwayId} = match.params;
        pathwaysStore.setActionCompleted(pathwayId, actionId, completed);
    }

    _onActionSelect(actionId) {
        this.setState({selectedActionId: actionId});
    }
}

export default class PathwayDetailView extends SimpleAppView {
    constructor(props) {
        super({
            ...props,
            title: "Pathway detail",
            parent: '/pathways',
            mainComponent: PathwayDetailView_Main
        });
    }
}
