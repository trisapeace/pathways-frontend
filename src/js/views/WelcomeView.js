import React from 'react';

import {Link} from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';

import SimpleAppView from 'ui-components/SimpleAppView';

class WelcomeView_Main extends React.Component {
    render() {
        return (
            <div className="content">
                <p>TODO: Everything else.</p>
                <RaisedButton
                    label="Services"
                    primary={true}
                    containerElement={<Link to="/services" />}
                />
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
