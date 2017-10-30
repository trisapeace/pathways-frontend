import React from 'react';

import PropTypes from 'prop-types';

import SimpleAppView from 'ui-components/SimpleAppView';

import {PaperCard} from 'polymer/paper-card';
import {PaperListbox} from 'polymer/paper-listbox';
import {PaperItem} from 'polymer/paper-item';
import {PaperIconButton} from 'polymer/paper-icon-button';
import {PaperCheckbox} from 'polymer/paper-checkbox';
import {IronCollapse} from 'polymer/iron-collapse';
import {IronIcon} from 'polymer/iron-icon';
import {PaperRipple} from 'polymer/paper-ripple';

class PathwayDetailView_Main extends React.Component {
    static propTypes = {
        match: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {
            selected: undefined
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
                        <p>This is a single pathway: <em>{params.pathwayId}</em>.</p>
                    </div>
                </PaperCard>
                {
                    actions.map(
                        (label, index) => <PathwayActionCard key={index} />
                    )
                }
            </div>
        );
    }
}

class PathwayActionCard extends React.PureComponent {
    static propTypes = {
        opened: PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = {
            opened: false
        };
    }

    render() {
        const {opened} = this.state;

        const label = "Pathway action";

        const toggleIcon = (opened) ? 'icons:expand-less' : 'icons:expand-more';

        const classes = ['pathway-action-item'];
        if (opened) classes.push('opened');

        return (
            <PaperCard className={classes.join(' ')} elevation={(opened) ? 2 : 1}>
                <div className="card-content interactive" onClick={this._onMainClick.bind(this)}>
                    <div className="pathway-action-item--main">
                        <div className="pathway-action-item--checkbox">
                            <PaperCheckbox onClick={this._onCheckboxClick.bind(this)} noink={true} />
                        </div>
                        <div className="pathway-action-item--header">
                            <span className="pathway-action-item--label">{label}</span>
                            <IronIcon className="pathway-action-item--toggle" icon={toggleIcon} />
                        </div>
                    </div>
                    <PaperRipple />
                </div>
                <IronCollapse opened={opened} className="card-actions">
                    <div className="pathway-action-item--actions">
                        <PaperIconButton icon="icons:search" />
                        <PaperIconButton icon="icons:list" />
                        <PaperIconButton icon="icons:alarm" />
                    </div>
                </IronCollapse>
            </PaperCard>
        );
    }

    _onMainClick(e) {
        e.preventDefault();
        this.setState({opened: !this.state.opened});
    }
    _onCheckboxClick(e) {
        e.stopPropagation();
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
