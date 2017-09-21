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
            'main': this.renderMain.bind(this),
            'header:full': this.renderHeader.bind(this),
            'header:dialog': this.renderDialogHeader.bind(this)
        };
    }

    get title() { return this.options.title; }
    get parent() { return this.options.parent; }

    render() {
        const {frame} = this.context;
        const renderFn = this._getRenderFn(frame);
        return renderFn(this.props);
    }

    renderMain(props) {
        void(props);
        throw Error("Not implemented");
    }

    renderHeader(props) {
        void(props);
        throw Error("Not implemented");
    }

    renderDialogHeader(props) {
        void(props);
        throw Error("Not implemented");
    }

    _getRenderFn(frame='main:full') {
        const [frameBase, frameContext] = frame.split(':');
        if (this._renderFns.hasOwnProperty(frame)) {
            return this._renderFns[frame];
        } else if (this._renderFns.hasOwnProperty(frameBase)) {
            return this._renderFns[frameBase];
        } else {
            throw Error("Not implemented");
        }
    }
}
