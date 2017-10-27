import React from 'react';

import PropTypes from 'prop-types';

import SimpleAppView from 'ui-components/SimpleAppView';

import {PaperCard} from 'polymer/paper-card';
import {PaperListbox} from 'polymer/paper-listbox';
import {PaperItem} from 'polymer/paper-item';
import {PaperIconButton} from 'polymer/paper-icon-button';
import {PaperCheckbox} from 'polymer/paper-checkbox';
import {IronCollapse} from 'polymer/iron-collapse';

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
                        <PaperListbox>
                            <PathwayActionItem />
                            <PathwayActionItem opened={true} />
                            <PathwayActionItem />
                            <PathwayActionItem />
                            <PathwayActionItem />
                            <PathwayActionItem />
                            <PathwayActionItem />
                            <PathwayActionItem />
                            <PathwayActionItem />
                            <PathwayActionItem />
                            <PathwayActionItem />
                            <PathwayActionItem />
                        </PaperListbox>
                    </div>
                </PaperCard>
            </div>
        );
    }
}

class PathwayActionItem extends React.PureComponent {
    static propTypes = {
        opened: PropTypes.bool
    };

    render() {
        const {opened} = this.props;

        const label = "Pathway action";

        const toggleIcon = (opened) ? 'icons:expand-less' : 'icons:expand-more';

        return (
            <PaperItem className="pathway-action-item">
                <div className="pathway-action-item--body">
                    <div className="pathway-action-item--main">
                        <div className="pathway-action-item--checkbox">
                            <PaperCheckbox />
                        </div>
                        <span className="pathway-action-item--label">{label}</span>
                        <PaperIconButton className="pathway-action-item--toggle" icon={toggleIcon} />
                    </div>
                    <IronCollapse opened={opened} className="pathway-action-item--detail">
                        <div className="pathway-action-item--actions">
                            <PaperIconButton icon="icons:search" />
                            <PaperIconButton icon="icons:list" />
                            <PaperIconButton icon="icons:alarm" />
                        </div>
                    </IronCollapse>
                </div>
            </PaperItem>
        );
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
