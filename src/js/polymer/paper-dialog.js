require('paper-dialog/paper-dialog.html');

import React from 'react';

import PropTypes from 'prop-types';

// TODO: Implement event passing with componentDidMount / etc. using a generic
//       higher-order component (#5).

export class PaperDialog extends React.Component {
    static propTypes = {
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
    }

    componentDidMount() {
        // Prevent the paper-dialog from opening or closing on its own.
        this._elem.addEventListener("iron-overlay-canceled", this._onCancelFn);
        this._elem.addEventListener("iron-overlay-closed", this._onCloseFn);
        this._elem.addEventListener("iron-overlay-opened", this._onOpenFn);
        this._elem.addEventListener("iron-resize", this._onResizeFn);
        this._elem.addEventListener("opened-changed", this._onOpenedChangedFn);
    }

    componentWillUnmount() {
        this._elem.removeEventListener("iron-overlay-canceled", this._onCancelFn);
        this._elem.removeEventListener("iron-overlay-closed", this._onCloseFn);
        this._elem.removeEventListener("iron-overlay-opened", this._onOpnFn);
        this._elem.removeEventListener("iron-resize", this._onResizeFn);
        this._elem.addEventListener("opened-changed", this._onOpenedChangedFn);
    }

    render() {
        return <paper-dialog ref={(elem) => this._elem = elem} {...this.props} />
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
}
