import React from 'react';

import PropTypes from 'prop-types';

import Portal from 'react-portal';

import {PaperDialog} from 'polymer/paper-dialog';

import AppViewFrame from 'ui-components/AppViewFrame';

export default class AppViewDialog extends React.Component {
    static propTypes = {
        appView: PropTypes.node.isRequired,
        isOpen: PropTypes.bool,
        onRequestClose: PropTypes.func
    };

    render() {
        const {appView, isOpen, onRequestClose} = this.props;

        const paperDialogProps = {
            className: "app-view-dialog",
            opened: isOpen,
            onClose: onRequestClose,
            onOpenStart: this._onOpenStart.bind(this),
            "entry-animation": "slide-from-bottom-animation",
            "exit-animation": "slide-down-animation",
            // modal: true,
            "with-backdrop": true
        };

        return (
            <Portal isOpened={true}>
                <PaperDialog {...paperDialogProps}>
                    <AppViewFrame frame="header:dialog" appView={appView} />
                    <AppViewFrame frame="main:dialog" appView={appView} />
                </PaperDialog>
            </Portal>
        );
    }

    _onOpenStart() {
        // Fire a resize event when the dialog opens. Initial render has a
        // container of size 0.
        window.dispatchEvent(new Event('resize'));
    }
}
