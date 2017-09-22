import React from 'react';

import PropTypes from 'prop-types';

import AppViewContainer from 'ui-components/AppViewContainer';

export default class AppViewContainer_Full extends AppViewContainer {
    static propTypes = {
        appView: PropTypes.node.isRequired
    };

    static childContextTypes = {
        container: PropTypes.object,
        containerType: PropTypes.string
    };

    getChildContext() {
        return {
            container: this,
            containerType: 'full'
        };
    }

    render() {
        const {appView} = this.props;

        return (
            <div className="app-view-full">
                {appView}
            </div>
        );
    }
}
