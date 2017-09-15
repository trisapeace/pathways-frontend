require('paper-dialog/paper-dialog.html');

import React from 'react';

import PropTypes from 'prop-types';

import reactPolymer from 'react-polymer';

// TODO: Implement event passing with componentDidMount / etc. using a generic
//       higher-order component.

export class PaperDialog extends React.PureComponent {
    static propTypes = {
        onCancel: PropTypes.func,
        onClose: PropTypes.func,
        onOpen: PropTypes.func
    };

    constructor() {
        super();
        this._onCancelFn = this._onCancel.bind(this);
        this._onCloseFn = this._onClose.bind(this);
        this._onOpenFn = this._onOpen.bind(this);
    }

    componentDidMount() {
        // Prevent the paper-dialog from opening or closing on its own.
        this._elem.addEventListener("iron-overlay-canceled", this._onCancelFn);
        this._elem.addEventListener("iron-overlay-closed", this._onCloseFn);
        this._elem.addEventListener("iron-overlay-opened", this._onOpenFn);
    }

    componentWillUnmount() {
        this._elem.removeEventListener("iron-overlay-canceled", this._onCancelFn);
        this._elem.removeEventListener("iron-overlay-closed", this._onCloseFn);
        this._elem.removeEventListener("iron-overlay-opened", this._onOpnFn);
    }

    render() {
        return <paper-dialog ref={(elem) => this._elem = elem} {...this.props} />
    }

    _onCancel(e) {
        e.preventDefault();
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
}

function _preventDefault(cb) {
    return (e) => {
        e.preventDefault();
        if (cb) return cb(e);
    };
}
