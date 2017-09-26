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
        if (nextProps.children !== this.props.children) {
            this.setState({prevChildren: this.props.children});
        }
    }

    componentDidUpdate() {
        if (this.state.prevChildren) {
            this._elem.selectIndex(1);
        } else {
            this._elem.selectIndex(0);
        }
    }

    render() {
        const {children, ...other} = this.props;
        const {prevChildren} = this.state;

        const pageElems = [];

        if (children) {
            pageElems.push(
                <NeonAnimatable key="current">{children}</NeonAnimatable>
            );
        }

        if (prevChildren) {
            pageElems.push(
                <NeonAnimatable key="prev">{prevChildren}</NeonAnimatable>
            );
        }

        console.log("Pages", pageElems);

        return (
            <NeonAnimatedPages ref={(elem) => this._elem = elem} {...other} selected={0} onAnimationFinished={this._onAnimationFinished.bind(this)}>
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
