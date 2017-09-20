import React from 'react';

import PropTypes from 'prop-types';

import {AppHeaderLayout} from 'polymer/app-layout';

import AppViewFrame from 'ui-components/AppViewFrame';

export default class AppViewFull extends React.Component {
    static propTypes = {
        appView: PropTypes.node.isRequired
    };

    render() {
        const {appView} = this.props;

        return (
            <AppHeaderLayout fullbleed>
                <AppViewFrame frame="header" appView={appView} />
                <AppViewFrame frame="main" appView={appView} />
            </AppHeaderLayout>
        );
    }
}
