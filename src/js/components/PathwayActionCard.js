import React from 'react';

import PropTypes from 'prop-types';

import ServiceMapView from 'views/ServiceMapView';

import AppViewContainer_Dialog from 'ui-components/AppViewContainer_Dialog';

import {PaperCard} from 'polymer/paper-card';
import {PaperIconButton} from 'polymer/paper-icon-button';
import {PaperCheckbox} from 'polymer/paper-checkbox';
import {IronCollapse} from 'polymer/iron-collapse';
import {IronIcon} from 'polymer/iron-icon';
import {PaperRipple} from 'polymer/paper-ripple';

export default class PathwayActionCard extends React.Component {
    static propTypes = {
        pathwayAction: PropTypes.object.isRequired,
        opened: PropTypes.bool.isRequired,
        onActionComplete: PropTypes.func.isRequired,
        onSelect: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            showDialog: false
        };
    }

    render() {
        const {pathwayAction, opened} = this.props;
        const {showDialog} = this.state;

        const label = pathwayAction.label;

        const toggleIcon = (opened) ? 'icons:expand-less' : 'icons:expand-more';

        const classes = ['pathway-action-item'];
        if (opened) classes.push('opened');
        if (pathwayAction.completed) classes.push('completed');

        const searchDialog = pathwayAction.search ? (
            <AppViewContainer_Dialog
                appView={<ServiceMapView initialSearch={pathwayAction.search} />}
                isOpen={showDialog}
                onRequestClose={this._onDialogRequestClose.bind(this)}
            />
        ) : null;

        return (
            <PaperCard className={classes.join(' ')} elevation={(opened) ? 2 : 1}>
                <div className="card-content">
                    <div className="pathway-action-item--main">
                        <div className="pathway-action-item--checkbox">
                            <PaperCheckbox checked={pathwayAction.completed} onChange={this._onCheckboxChange.bind(this)} />
                        </div>
                        <div className="pathway-action-item--header interactive" onClick={this._onMainClick.bind(this)}>
                            <span className="pathway-action-item--label">{label}</span>
                            <IronIcon className="pathway-action-item--toggle" icon={toggleIcon} />
                            <PaperRipple />
                        </div>
                    </div>
                </div>
                <IronCollapse opened={opened} className="card-actions">
                    <div className="pathway-action-item--actions">
                        <PaperIconButton icon="icons:search" onClick={this._onMapSearchClick.bind(this)} disabled={!pathwayAction.search} />
                        <PaperIconButton icon="icons:list" onClick={this._onListSearchClick.bind(this)} disabled={!pathwayAction.search} />
                        <PaperIconButton icon="icons:alarm" onClick={this._onAlarmClick.bind(this)} />
                    </div>
                </IronCollapse>
                {searchDialog}
            </PaperCard>
        );
    }

    _onMainClick() {
        const {pathwayAction, opened, onSelect} = this.props;
        if (onSelect) onSelect(opened ? undefined : pathwayAction.id);
    }

    _onCheckboxChange() {
        const {pathwayAction, onActionComplete} = this.props;
        if (onActionComplete) onActionComplete(pathwayAction.id, !pathwayAction.completed);
        // FIXME: Cheating because I can't be bothered to fix observers in PathwaysStore for this little proof of concept.
        this.setState({});
    }

    _onMapSearchClick(event) {
        event.preventDefault();
        this.setState({showDialog: true});
    }

    _onListSearchClick(event) {
        event.preventDefault();
        this.setState({showDialog: true});
    }

    _onAlarmClick(event) {
        event.preventDefault();
        alert("🤖 Beep. Beep. Beep. 🤖");
    }

    _onDialogRequestClose() {
        this.setState({showDialog: false});
    }
}
