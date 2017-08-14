import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import ArrowBack from 'material-ui-icons/ArrowBack';

import AppView from 'ui-components/AppView';

// An AppView that is rendered with an AppBar component, which includes the
// view's title, and an "up" navigation button if its parent is set.
// Expected options: title, parent, mainComponent.

export default class SimpleAppView extends AppView {
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

        // const appBarProps = {
        //     title: this.title
        // };

        // if (this.parent) {
        //     appBarProps.iconElementLeft = <IconButton><ArrowBack /></IconButton>
        //     appBarProps.onLeftIconButtonTouchTap = this._onBackTouchTapCb.bind(this);
        // }

        const backButton = this.parent ? (
            <IconButton color="contrast" aria-label="Back" onTouchTap={this._onBackTouchTapCb.bind(this)}>
                <ArrowBack />
            </IconButton>
        ) : null;

        return (
            <AppBar position="static">
                <Toolbar>
                    {backButton}
                    <Typography type="title" color="inherit">{this.title}</Typography>
                </Toolbar>
            </AppBar>
        );
    }

    _onBackTouchTapCb() {
        const {router} = this.context;
        if (this.parent) {
            router.history.push(this.parent);
        }
    }
}

SimpleAppView.defaultOptions = {
    ...AppView.defaultOptions,
    mainComponent: null
};
