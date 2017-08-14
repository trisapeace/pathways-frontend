import React from 'react';

import PropTypes from 'prop-types';

export default class AppView extends React.Component {
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

    static routeRenderFn(frame) {
        return (props) => <this frame={frame} {...props} />;
    }

    render() {
        const {frame, ...props} = this.props;
        const renderFn = this._getRenderFn(frame);
        return renderFn(props);
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

AppView.defaultOptions = {
    title: null,
    parent: null
};

AppView.contextTypes = {
    router: PropTypes.object.isRequired
};

AppView.propTypes = {
    frame: PropTypes.string
};
