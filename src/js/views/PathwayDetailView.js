import React from 'react';

import PropTypes from 'prop-types';

import SimpleAppView from 'ui-components/SimpleAppView';

import {PaperCard} from 'polymer/paper-card';

class PathwayDetailView_Main extends React.Component {
    static propTypes = {
        match: PropTypes.object
    };

    render() {
        const {match} = this.props;
        const {params} = match;

        return (
            <div>
                <PaperCard className="full-card">
                    <div className="card-content">
                        <p>This is a single pathway: <em>{params.pathwayId}</em>.</p>
                        <p>Pathway actions go here.</p>
                        <p>Pathway actions go here.</p>
                        <p>Pathway actions go here.</p>
                        <p>Pathway actions go here.</p>
                        <p>Pathway actions go here.</p>
                        <p>Pathway actions go here.</p>
                        <p>Pathway actions go here.</p>
                        <p>Pathway actions go here.</p>
                        <p>Pathway actions go here.</p>
                        <p>Pathway actions go here.</p>
                        <p>Pathway actions go here.</p>
                        <p>Pathway actions go here.</p>
                        <p>Pathway actions go here.</p>
                        <p>Pathway actions go here.</p>
                        <p>Pathway actions go here.</p>
                        <p>Pathway actions go here.</p>
                        <p>Pathway actions go here.</p>
                        <p>Pathway actions go here.</p>
                        <p>Pathway actions go here.</p>
                        <p>Pathway actions go here.</p>
                        <p>Pathway actions go here.</p>
                        <p>Pathway actions go here.</p>
                        <p>Pathway actions go here.</p>
                        <p>Pathway actions go here.</p>
                        <p>Pathway actions go here.</p>
                        <p>Pathway actions go here.</p>
                    </div>
                </PaperCard>
            </div>
        );
    }
}

export default class PathwayDetailView extends SimpleAppView {
    constructor(props) {
        super({
            ...props,
            title: "Pathways",
            parent: '/pathways',
            mainComponent: PathwayDetailView_Main
        });
    }
}
