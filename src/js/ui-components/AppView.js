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
            main: this.renderMain.bind(this),
            header: this.renderHeader.bind(this)
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

    _getRenderFn(frame='main') {
        return this._renderFns[frame];
    }
}
