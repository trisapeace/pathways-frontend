import React from 'react';

import PropTypes from 'prop-types';

// TODO: Handle history modification (via router) inside AppViewContainer classes.
//       This will allow us to use different routing models with different
//       containers.

// TODO: Add a "params" propType that we can use instead of "location" and
//       "computedMatch".

export default class AppView extends React.Component {
    static contextTypes = {
        container: PropTypes.object,
        containerType: PropTypes.string,
        router: PropTypes.object.isRequired
    };

    static propTypes = {
        location: PropTypes.object,
        computedMatch: PropTypes.object
    };

    static defaultOptions = {
        title: null,
        parent: null
    };

    constructor(options={}) {
        super();

        this.options = Object.assign({}, this.constructor.defaultOptions, options);

        this._renderFns = {
            full: this.renderFull.bind(this),
            dialog: this.renderDialog.bind(this)
        };
    }

    get title() { return this.options.title; }
    get parent() { return this.options.parent; }

    render() {
        const {containerType} = this.context;
        const renderFn = this._getRenderFn(containerType);
        return renderFn(this.props);
    }

    renderFull(props) {
        void(props);
        throw Error("Not implemented");
    }

    renderDialog(props) {
        void(props);
        throw Error("Not implemented");
    }

    _getRenderFn(containerType) {
        if (this._renderFns.hasOwnProperty(containerType)) {
            return this._renderFns[containerType];
        } else {
            throw Error("Not implemented");
        }
    }
}
