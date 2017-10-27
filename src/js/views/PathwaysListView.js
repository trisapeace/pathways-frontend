import React from 'react';

import LinkButton from 'ui-components/LinkButton';
import SimpleAppView from 'ui-components/SimpleAppView';

import PartialCircle from 'components/PartialCircle';

import {IronIcon} from 'polymer/iron-icon';
import {PaperRipple} from 'polymer/paper-ripple';
import {PaperBadge} from 'polymer/paper-badge';
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
                        <LinkButton to="/pathways/example" className="pathway-list-item">
                            <div className="pathway-icon-wrapper">
                                <div className="pathway-icon">
                                    <PartialCircle start={0} end={100} className="pathway-icon-progress" />
                                    <IronIcon icon="communication:chat" />
                                    <PaperBadge icon="check" />
                                </div>
                            </div>
                            <div className="pathway-list-item-name">
                                Improve my English
                            </div>
                            <PaperRipple />
                        </LinkButton>
                        <LinkButton to="/pathways/example" className="pathway-list-item pathway-list-item--focus">
                            <div className="pathway-icon-wrapper">
                                <div className="pathway-icon">
                                    <PartialCircle start={0} end={80} className="pathway-icon-progress" />
                                    <IronIcon icon="work" />
                                </div>
                            </div>
                            <div className="pathway-list-item-name">
                                Find employment
                            </div>
                            <PaperRipple />
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
