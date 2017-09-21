import React from 'react';

import PropTypes from 'prop-types';

import AppView from 'ui-components/AppView';

import {AppHeader, AppToolbar} from 'polymer/app-layout';
import {PaperIconButton} from 'polymer/paper-icon-button';

// TODO: In a dialog, wrap contents in <PaperDialogScrollable>.
// TODO: In a dialog, the Back button should trigger dialog close.

export default class SimpleAppView extends AppView {
    /**
     * An AppView that is rendered with an AppBar component, which includes
     * the view's title, and an "up" navigation button if its parent is set.
     * Expected options: title, parent, mainComponent.
     */

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
        return (
            <AppHeader slot="header">
                <SimpleAppViewToolbar parent={this.parent} title={this.title} />
            </AppHeader>
        );
    }

    renderDialogHeader(props) {
        void(props);
        return (
            <SimpleAppViewToolbar parent={this.parent} title={this.title} />
        );
    }
}

class SimpleAppViewToolbar extends React.PureComponent {
    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    static propTypes = {
        parent: PropTypes.string,
        title: PropTypes.string
    };

    render() {
        const {parent, title} = this.props;

        const backButton = parent ? (
            <PaperIconButton icon="arrow-back" onClick={this._onBackClick.bind(this)} />
        ) : null;

        return (
            <AppToolbar>
                {backButton}
                <div main-title>{title}</div>
            </AppToolbar>
        );
    }

    _onBackClick() {
        const {router} = this.context;
        const {parent} = this.props;

        if (parent) {
            router.history.push(parent);
        }
    }
}
