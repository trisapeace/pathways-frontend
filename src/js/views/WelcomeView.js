import React from 'react';

import ServiceMapView from 'views/ServiceMapView';

import AppViewContainer_Dialog from 'ui-components/AppViewContainer_Dialog';
import LinkButton from 'ui-components/LinkButton';
import SimpleAppView from 'ui-components/SimpleAppView';

import {PaperButton} from 'polymer/paper-button';
import {PaperCard} from 'polymer/paper-card';

class WelcomeView_Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogOpen: false
        };
    }

    render() {
        const servicesDialog = (
            <AppViewContainer_Dialog
                appView={<ServiceMapView initialSearch={{what: 'PASSPORTS'}} />}
                isOpen={this.state.isDialogOpen}
                onRequestClose={this._onDialogRequestClose.bind(this)}
            />
        );

        return (
            <div>
                <PaperCard className="full-card">
                    <div className="card-content">
                        <p>TODO: Everything else.</p>
                        <LinkButton to="/pathways" raised className="grey">
                            Pathways
                        </LinkButton>
                        <LinkButton to="/services" raised className="indigo">
                            Services
                        </LinkButton>
                        <PaperButton onClick={this._onDialogOpenClick.bind(this)} raised>
                            Services (Dialog)
                        </PaperButton>
                        <LinkButton to="/about">
                            About
                        </LinkButton>
                    </div>
                </PaperCard>
                {servicesDialog}
            </div>
        );
    }

    _onDialogOpenClick(event) {
        event.preventDefault();
        this.setState({isDialogOpen: true});
    }

    _onDialogRequestClose() {
        this.setState({isDialogOpen: false});
    }
}

export default class WelcomeView extends SimpleAppView {
    constructor(props) {
        super({
            ...props,
            title: "Welcome",
            parent: null,
            mainComponent: WelcomeView_Main
        });
    }
}
