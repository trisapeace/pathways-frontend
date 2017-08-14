import React from 'react';

import AppBar from 'material-ui/AppBar';

import AppView from 'ui-components/AppView';

// An AppView that is rendered with an AppBar component, which includes the
// view's title, and an "up" navigation button if its parent is set.
// Expected options: title, parent, mainComponent.

export default class SimpleAppView extends AppView {
    constructor(options={}) {
        const {mainComponent, ...otherOptions} = options;

        super(otherOptions);

        this.mainComponent = mainComponent;
    }

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
        return <AppBar title={this.title} />
    }
}
