import React from 'react';

import PropTypes from 'prop-types';

import WithContext from 'util/WithContext';

export default class AppViewFull extends React.Component {
    static propTypes = {
        appView: PropTypes.node.isRequired
    };

    render() {
        const {appView} = this.props;

        const appViewContext = {
            frame: 'full'
        };

        return (
            <div className="app-view-full">
                <WithContext context={appViewContext}>
                    {appView}
                </WithContext>
            </div>
        );
    }
}
