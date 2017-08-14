import React from 'react';

import Typography from 'material-ui/Typography';

import LinkButton from 'ui-components/LinkButton';
import SimpleAppView from 'ui-components/SimpleAppView';

class WelcomeView_Main extends React.Component {
    render() {
        return (
            <div className="content">
                <Typography type="body1" component="p">
                    TODO: Everything else.
                </Typography>
                <LinkButton raised color="primary" to="/services">
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
