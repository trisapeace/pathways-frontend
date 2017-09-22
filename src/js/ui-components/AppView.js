import React from 'react';

import PropTypes from 'prop-types';

export default class AppView extends React.Component {
    static contextTypes = {
        frame: PropTypes.string,
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
        const {frame} = this.context;
        const renderFn = this._getRenderFn(frame);
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

    _getRenderFn(frame='full') {
        const [frameBase, frameContext] = frame.split(':');
        void(frameContext);
        if (this._renderFns.hasOwnProperty(frame)) {
            return this._renderFns[frame];
        } else if (this._renderFns.hasOwnProperty(frameBase)) {
            return this._renderFns[frameBase];
        } else {
            throw Error("Not implemented");
        }
    }
}
