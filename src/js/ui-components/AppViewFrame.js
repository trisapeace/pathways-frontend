import React from 'react';

import PropTypes from 'prop-types';

export default class AppViewFrame extends React.Component {
    static propTypes = {
        frame: PropTypes.string,
        appView: PropTypes.node
    };

    static childContextTypes = {
        frame: PropTypes.string
    }

    getChildContext() {
        return {
            frame: this.props.frame
        };
    }

    render() {
        return this.props.appView;
    }
}
