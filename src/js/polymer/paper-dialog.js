require('paper-dialog/paper-dialog.html');

import React from 'react';

import PropTypes from 'prop-types';

import reactPolymer from 'react-polymer';

reactPolymer.registerEvent('iron-overlay-canceled', 'onIronOverlayCancel');
reactPolymer.registerEvent('iron-overlay-closed', 'onIronOverlayClose');
reactPolymer.registerEvent('iron-overlay-opened', 'onIronOverlayOpen');

export class PaperDialog extends React.PureComponent {
    static propTypes = {
        opened: PropTypes.bool,
        onCancel: PropTypes.func,
        onClose: PropTypes.func,
        onOpen: PropTypes.func
    };

    render() {
        const {onCancel, onClose, onOpen, ...other} = this.props;

        const extra = {
            onIronOverlayCancel: onCancel,
            onIronOverlayClose: onClose,
            onIronOverlayOpen: onOpen
        };

        if (isFinite(this.props.opened)) {
            // If "opened" is set, prevent the paper-dialog from closing on
            // its own.
            extra.onIronOverlayClose = _preventDefault(onClose);
            extra.onIronOverlayOpen = _preventDefault(onOpen);
        }

        return <paper-dialog {...other} {...extra} />
    }
}

function _preventDefault(cb) {
    return (e) => {
        e.preventDefault();
        if (cb) return cb(e);
    };
}
