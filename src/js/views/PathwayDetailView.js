import React from 'react';

import PropTypes from 'prop-types';

import SimpleAppView from 'ui-components/SimpleAppView';

import PathwayActionCard from 'components/PathwayActionCard';

import {PaperCard} from 'polymer/paper-card';

class PathwayDetailView_Main extends React.Component {
    static propTypes = {
        match: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {
            selectedActionId: undefined
        };
    }

    render() {
        const {match} = this.props;
        const {params} = match;

        const actions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        return (
            <div>
                <PaperCard className="full-card">
                    <div className="card-content">
                        <p>Short description of this pathway, <em>{params.pathwayId}</em>.</p>
                    </div>
                </PaperCard>
                {
                    actions.map(
                        (actionId, index) => (
                            <PathwayActionCard
                                key={index}
                                actionId={actionId}
                                opened={this.state.selectedActionId === actionId}
                                onSelect={this._onActionSelect.bind(this)}
                            />
                        )
                    )
                }
            </div>
        );
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
