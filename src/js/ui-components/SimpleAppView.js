import React from 'react';

import PropTypes from 'prop-types';

import AppView from 'ui-components/AppView';

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
        return <SimpleAppViewHeader parent={this.parent} title={this.title} />
    }
}

class SimpleAppViewHeader extends React.PureComponent {
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
            <paper-icon-button icon="arrow-back" onClick={this._onBackClick.bind(this)} />
        ) : null;

        return (
            <app-header slot="header" reveals>
                <app-toolbar>
                    {backButton}
                    <div main-title>{title}</div>
                </app-toolbar>
            </app-header>
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
