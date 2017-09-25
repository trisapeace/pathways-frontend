require('paper-dialog/paper-dialog.html');

import React from 'react';

import PropTypes from 'prop-types';

export class PaperDialog extends React.Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]),
        opened: PropTypes.bool,
        onCancel: PropTypes.func,
        onClose: PropTypes.func,
        onOpen: PropTypes.func,
        onOpenStart: PropTypes.func,
        onResize: PropTypes.func
    };

    constructor(props) {
        super(props);
        this._onCancelFn = this._onCancel.bind(this);
        this._onCloseFn = this._onClose.bind(this);
        this._onOpenFn = this._onOpen.bind(this);
        this._onResizeFn = this._onResize.bind(this);
        this._onOpenedChangedFn = this._onOpenedChanged.bind(this);
        this._onAnimationFinishedFn = this._onAnimationFinished.bind(this);
        this.state = {
            visible: props.opened
        };
    }

    componentDidMount() {
        // Prevent the paper-dialog from opening or closing on its own.
        this._elem.addEventListener("iron-overlay-canceled", this._onCancelFn);
        this._elem.addEventListener("iron-overlay-closed", this._onCloseFn);
        this._elem.addEventListener("iron-overlay-opened", this._onOpenFn);
        this._elem.addEventListener("iron-resize", this._onResizeFn);
        this._elem.addEventListener("opened-changed", this._onOpenedChangedFn);
        this._elem.addEventListener("neon-animation-finish", this._onAnimationFinishedFn);
    }

    componentWillUnmount() {
        this._elem.removeEventListener("iron-overlay-canceled", this._onCancelFn);
        this._elem.removeEventListener("iron-overlay-closed", this._onCloseFn);
        this._elem.removeEventListener("iron-overlay-opened", this._onOpnFn);
        this._elem.removeEventListener("iron-resize", this._onResizeFn);
        this._elem.removeEventListener("opened-changed", this._onOpenedChangedFn);
        this._elem.removeEventListener("neon-animation-finish", this._onAnimationFinishedFn);
    }

    componentWillReceiveProps(nextProps) {
        // Keep track of whether the dialog is visible so we can stop when it
        // is closed. When there is an animation, we expect the state to be
        // updated after the animation, in this._onAnimationFinished.
        const animationConfig = this._elem.animationConfig || {};
        if (nextProps.opened && !animationConfig.enter) {
            this.setState({visible: true});
        } else if (!nextProps.opened && !animationConfig.exit) {
            this.setState({visible: false});
        }
    }

    render() {
        const {children, ...other} = this.props;
        return (
            <paper-dialog ref={(elem) => this._elem = elem} {...other}>
                {this.state.visible ? children : null}
            </paper-dialog>
        );
    }

    _onCancel(e) {
        if (this.props.onCancel) this.props.onCancel(e);
    }

    _onClose(e) {
        e.preventDefault();
        if (this.props.onClose) this.props.onClose(e);
    }

    _onOpen(e) {
        e.preventDefault();
        if (this.props.onOpen) this.props.onOpen(e);
    }

    _onResize(e) {
        if (this.props.onResize) this.props.onResize(e);
    }

    _onOpenedChanged(e) {
        // The "iron-resize" event seems to fire a bit late when the dialog is
        // revealed, so we'll fake it.
        const {value} = e.detail;
        if (value === true) {
            if (this.props.onOpenStart) this.props.onOpenStart(e);
        }
    }

    _onAnimationFinished() {
        const visible = this.props.opened;
        if (this.state.visible !== visible) {
            this.setState({visible});
        }
    }
}
