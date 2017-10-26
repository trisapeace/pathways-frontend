import React from 'react';

import LinkButton from 'ui-components/LinkButton';
import SimpleAppView from 'ui-components/SimpleAppView';

import {PaperCard} from 'polymer/paper-card';

class PathwaysListView_Main extends React.Component {
    render() {
        return (
            <div>
                <PaperCard className="full-card">
                    <div className="card-content">
                        <p>
                            All of my pathways go here.
                        </p>
                        <LinkButton to="/pathways/example">
                            A pathway
                        </LinkButton>
                    </div>
                </PaperCard>
            </div>
        );
    }
}

export default class PathwaysListView extends SimpleAppView {
    constructor(props) {
        super({
            ...props,
            title: "Pathways",
            parent: '/',
            mainComponent: PathwaysListView_Main
        });
    }
}
