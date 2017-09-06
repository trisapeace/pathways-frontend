import React from 'react';

import PropTypes from 'prop-types';

import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

import LinkButton from 'ui-components/LinkButton';
import SimpleAppView from 'ui-components/SimpleAppView';

import styles from 'styles';

@withStyles(styles)
class WelcomeView_Main extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Typography type="body1" component="p" gutterBottom={true}>
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
