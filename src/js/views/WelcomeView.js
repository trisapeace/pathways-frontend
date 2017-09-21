require('iron-icon/iron-icon.html');

import React from 'react';

import {StaticRouter} from 'react-router-dom';

import routes from 'routes';

import AppViewDialog from 'ui-components/AppViewDialog';
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
        const context = {};

        const servicesDialog = (
            <StaticRouter location="/services" context={context}>
                <AppViewDialog appView={routes} isOpen={this.state.isDialogOpen} onRequestClose={this._onDialogRequestClose.bind(this)} />
            </StaticRouter>
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
