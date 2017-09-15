require('paper-chip/paper-chip.html');

import React from 'react';

import PropTypes from 'prop-types';

export class PaperChip extends React.PureComponent {
    static propTypes = {
        onRemove: PropTypes.func
    };

    constructor() {
        super();
        this._onRemoveFn = this._onRemove.bind(this);
    }

    componentDidMount() {
        this._elem.addEventListener("remove", this._onRemoveFn);
    }

    componentWillUnmount() {
        this._elem.removeEventListener("remove", this._onRemoveFn);
    }

    render() {
        return <paper-chip ref={(elem) => this._elem = elem} {...this.props} />
    }

    _onRemove(e) {
        e.preventDefault();
        if (this.props.onRemove) this.props.onRemove(e);
    }
}
