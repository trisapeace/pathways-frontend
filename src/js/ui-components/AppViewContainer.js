import React from 'react';

import PropTypes from 'prop-types';

export default class AppViewContainer extends React.Component {
    static childContextTypes = {
        container: PropTypes.object,
        containerType: PropTypes.string
    };

    getChildContext() {
        return {
            container: this,
            containerType: undefined
        };
    }

    dialogClose() {
        throw Error("Not implemented");
    }
}
