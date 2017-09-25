import React from 'react';

import PropTypes from 'prop-types';

import AppView from 'ui-components/AppView';

import {AppHeader, AppHeaderLayout, AppToolbar} from 'polymer/app-layout';
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

    renderFull(props) {
        const MainComponent = this.mainComponent;

        return (
            <AppHeaderLayout className="app-view" fullbleed>
                <AppHeader slot="header">
                    <SimpleAppViewToolbar
                        hasParent={Boolean(this.parent)}
                        onBackClick={this._onBackClick.bind(this)}
                        title={this.title}
                    />
                </AppHeader>
                <MainComponent {...props} />
            </AppHeaderLayout>
        );
    }

    renderDialog(props) {
        const MainComponent = this.mainComponent;

        return (
            <div className="app-view">
                <SimpleAppViewToolbar
                    isOverlay={true}
                    onCloseClick={this._onCloseClick.bind(this)}
                    title={this.title}
                />
                <MainComponent {...props} />
            </div>
        );
    }

    _onBackClick() {
        const {router} = this.context;

        if (this.parent) {
            router.history.push(this.parent);
        }
    }

    _onCloseClick() {
        const {container} = this.context;

        if (container) {
            container.dialogClose();
        }
    }
}

class SimpleAppViewToolbar extends React.PureComponent {
    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    static propTypes = {
        hasParent: PropTypes.bool,
        isOverlay: PropTypes.bool,
        onBackClick: PropTypes.func,
        onCloseClick: PropTypes.func,
        title: PropTypes.string
    };

    render() {
        const {hasParent, isOverlay, onBackClick, onCloseClick, title} = this.props;

        let navButton = null;

        if (hasParent) {
            navButton = <PaperIconButton icon="arrow-back" onClick={onBackClick} />;
        } else if (isOverlay) {
            navButton = <PaperIconButton icon="close" onClick={onCloseClick} />;
        }

        return (
            <AppToolbar>
                {navButton}
                <div main-title>{title}</div>
            </AppToolbar>
        );
    }
}
