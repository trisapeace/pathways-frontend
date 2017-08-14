import React from 'react';

import PropTypes from 'prop-types';

export default class AppView extends React.Component {
    constructor(options={}) {
        const {title, parent} = options;

        super();

        this.title = title;
        this.parent = parent;

        this._renderFns = {
            main: this.renderMain.bind(this),
            header: this.renderHeader.bind(this)
        };
    }

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

AppView.propTypes = {
    frame: PropTypes.string
}
