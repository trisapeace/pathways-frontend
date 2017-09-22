require('iron-icon/iron-icon.html');

import React from 'react';

import ServiceMapView from 'views/ServiceMapView';

import AppViewContainer_Dialog from 'ui-components/AppViewContainer_Dialog';
import LinkButton from 'ui-components/LinkButton';
import SimpleAppView from 'ui-components/SimpleAppView';

import {PaperButton} from 'polymer/paper-button';

class WelcomeView_Main extends React.Component {
    constructor() {
        super();
        this.state = {
            isDialogOpen: false
        };
    }

    render() {
        const servicesDialog = (
            <AppViewContainer_Dialog
                appView={<ServiceMapView />}
                isOpen={this.state.isDialogOpen}
                onRequestClose={this._onDialogRequestClose.bind(this)}
            />
        );

        return (
            <div>
                <p>TODO: Everything else.</p>
                <LinkButton to="/services" raised className="indigo">
                    Services
                </LinkButton>
                <PaperButton onClick={this._onDialogOpenClick.bind(this)} raised>
                    Services (Dialog)
                </PaperButton>
                {servicesDialog}
            </div>
        );
    }

    _onDialogOpenClick(e) {
        e.preventDefault();
        this.setState({isDialogOpen: true});
    }

    _onDialogRequestClose() {
        this.setState({isDialogOpen: false});
    }
}

export default class WelcomeView extends SimpleAppView {
    constructor() {
        super({
            title: "Welcome",
            parent: null,
            mainComponent: WelcomeView_Main
        });
    }
}
