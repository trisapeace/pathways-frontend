import React from 'react';

import PropTypes from 'prop-types';

import Portal from 'react-portal';

import WithContext from 'util/WithContext';

import {PaperDialog} from 'polymer/paper-dialog';

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

        const appViewContext = {
            frame: 'dialog'
        };

        return (
            <Portal isOpened={true}>
                <PaperDialog {...paperDialogProps}>
                    <WithContext context={appViewContext}>
                        {appView}
                    </WithContext>
                </PaperDialog>
            </Portal>
        );
    }

    _onOpenStart() {
        // Fire a resize event when the dialog opens. Initial render has a
        // container of size 0, so a map contained in the dialog ends up
        // rendering wrong. This event fires before the dialog is drawn, so we
        // need to delay the resize event slightly.
        // FIXME: We should find an event that fires at the right time.
        window.setTimeout(
            () => window.dispatchEvent(new Event('resize')),
            10
        );
    }
}
