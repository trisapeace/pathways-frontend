require('iron-icon/iron-icon.html');

import React from 'react';

import PropTypes from 'prop-types';

import LinkButton from 'ui-components/LinkButton';
import SimpleAppView from 'ui-components/SimpleAppView';

class WelcomeView_Main extends React.Component {
    render() {
        return (
            <div>
                <p>TODO: Everything else.</p>
                <LinkButton to="/services" raised className="indigo">
                    <iron-icon icon="explore" />
                    Services
                </LinkButton>
            </div>
        );
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
