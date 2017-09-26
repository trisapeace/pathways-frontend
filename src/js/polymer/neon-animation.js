require('neon-animation/neon-animatable.html');
require('neon-animation/neon-animated-pages.html');

import React from 'react';

import PropTypes from 'prop-types';

export class NeonAnimatable extends React.Component {
    render() {
        return <neon-animatable {...this.props} />;
    }
}

export class NeonAnimatedPages extends React.Component {
    static propTypes = {
        onAnimationFinished: PropTypes.func
    };

    constructor(props) {
        super(props);
        this._onAnimationFinishedFn = this._onAnimationFinished.bind(this);
    }

    componentDidMount() {
        this._elem.addEventListener("neon-animation-finish", this._onAnimationFinishedFn);
    }

    componentWillUnmount() {
        this._elem.removeEventListener("neon-animation-finish", this._onAnimationFinishedFn);
    }

    render() {
        return <neon-animated-pages ref={(elem) => this._elem = elem} {...this.props} />;
    }

    selectIndex(index) {
        this._elem.selectIndex(index);
    }

    _onAnimationFinished(e) {
        if (this.props.onAnimationFinished) this.props.onAnimationFinished(e);
    }
}
