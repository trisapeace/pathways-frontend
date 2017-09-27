import React from 'react';

import PropTypes from 'prop-types';

import {NeonAnimatable, NeonAnimatedPages} from 'polymer/neon-animation';

export default class SimplePageTransition extends React.Component {
    static propTypes = {
        children: PropTypes.node
    };

    constructor(props) {
        super(props);
        this.state = {
            prevChildren: null
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.children && nextProps.children !== this.props.children) {
            this.setState({prevChildren: this.props.children});
        }
    }

    componentDidUpdate() {
        this._elem.selectIndex(1);
    }

    render() {
        const {children, ...other} = this.props;
        const {prevChildren} = this.state;

        const pageElems = [];

        pageElems.push(
            <NeonAnimatable key="prev">{prevChildren}</NeonAnimatable>
        );

        pageElems.push(
            <NeonAnimatable key="current">{children}</NeonAnimatable>
        );

        return (
            <NeonAnimatedPages ref={(elem) => this._elem = elem} {...other} selected={prevChildren ? 0 : 1} onAnimationFinished={this._onAnimationFinished.bind(this)}>
                {pageElems}
            </NeonAnimatedPages>
        );
    }

    _onAnimationFinished() {
        this.setState({
            prevChildren: null
        });
    }
}
