import React from 'react';

import PropTypes from 'prop-types';

import {inject, observer} from 'mobx-react';

import LinkButton from 'ui-components/LinkButton';
import SimpleAppView from 'ui-components/SimpleAppView';

import ProgressCircle from 'components/ProgressCircle';

import {IronIcon} from 'polymer/iron-icon';
import {PaperRipple} from 'polymer/paper-ripple';
import {PaperBadge} from 'polymer/paper-badge';
import {PaperCard} from 'polymer/paper-card';

@inject('pathwaysStore')
@observer
class PathwaysListView_Main extends React.Component {
    static propTypes = {
        pathwaysStore: PropTypes.object.isRequired
    };

    render() {
        const {pathwaysStore} = this.props;

        const allPathwayDetails = pathwaysStore.allPathwayDetails();

        return (
            <div>
                <PaperCard className="full-card">
                    <div className="card-content">
                        {
                            allPathwayDetails.map(
                                (pathwayDetails, index) => <PathwayLinkButton key={index} pathwayDetails={pathwayDetails} />
                            )
                        }
                    </div>
                </PaperCard>
            </div>
        );
    }
}

class PathwayLinkButton extends React.Component {
    static propTypes = {
        pathwayDetails: PropTypes.object.isRequired
    };

    render() {
        const {pathwayDetails} = this.props;

        const classes = ['pathway-list-item'];
        if (pathwayDetails.focus) classes.push('pathway-list-item--focus');

        const progressBadge = (pathwayDetails.progress == 1) ? <PaperBadge icon="check" /> : null;

        return (
            <LinkButton to={pathwayDetails.url} className={classes.join(' ')}>
                <div className="pathway-icon-wrapper">
                    <div className="pathway-icon">
                        <ProgressCircle start={0} end={pathwayDetails.progress} className="pathway-icon-progress" />
                        <IronIcon icon={pathwayDetails.icon} />
                        {progressBadge}
                    </div>
                </div>
                <div className="pathway-list-item-name">
                    {pathwayDetails.label}
                </div>
                <PaperRipple />
            </LinkButton>
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
