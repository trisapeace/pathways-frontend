import React from 'react';

import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

import ArrowBack from 'material-ui-icons/ArrowBack';

import AppView from 'ui-components/AppView';

import styles from 'styles';

// An AppView that is rendered with an AppBar component, which includes the
// view's title, and an "up" navigation button if its parent is set.
// Expected options: title, parent, mainComponent.

export default class SimpleAppView extends AppView {
    static defaultOptions = {
        ...AppView.defaultOptions,
        mainComponent: null
    };

    get mainComponent() { return this.options.mainComponent; }

    renderMain(props) {
        const MainComponent = this.mainComponent;
        if (MainComponent) {
            return <MainComponent {...props} />;
        } else {
            return null;
        }
    }

    renderHeader(props) {
        void(props);
        return <SimpleAppViewHeader parent={this.parent} title={this.title} />
    }
}

@withStyles(styles)
class SimpleAppViewHeader extends React.PureComponent {
    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    static propTypes = {
        classes: PropTypes.object.isRequired,
        parent: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    };

    render() {
        const {classes, parent, title} = this.props;

        const backButton = parent ? (
            <IconButton className={classes.menuButton} color="contrast" aria-label="Back" onTouchTap={this._onBackTouchTapCb.bind(this)}>
                <ArrowBack />
            </IconButton>
        ) : null;

        const hasButton = backButton !== null;

        return (
            <AppBar position="static">
                <Toolbar disableGutters={hasButton}>
                    {backButton}
                    <Typography type="title" color="inherit" className={classes.flex}>{title}</Typography>
                </Toolbar>
            </AppBar>
        );
    }

    _onBackTouchTapCb() {
        const {router} = this.context;
        const {parent} = this.props;

        if (parent) {
            router.history.push(parent);
        }
    }
}
