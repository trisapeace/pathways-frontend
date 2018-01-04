import React from 'react';

import PropTypes from 'prop-types';

import {Portal} from 'react-portal';

import {PaperDialog} from 'polymer/paper-dialog';

import AppViewContainer from 'ui-components/AppViewContainer';

export default class AppViewContainer_Dialog extends AppViewContainer {
    static propTypes = {
        appView: PropTypes.node.isRequired,
        isOpen: PropTypes.bool,
        onRequestClose: PropTypes.func
    };

    static childContextTypes = {
        container: PropTypes.object,
        containerType: PropTypes.string
    };

    getChildContext() {
        return {
            container: this,
            containerType: 'dialog'
        };
    }

    render() {
        const {appView, isOpen, onRequestClose} = this.props;

        const paperDialogProps = {
            className: "app-view-dialog",
            opened: isOpen,
            onClose: onRequestClose,
            onOpenStart: this._onOpenStart.bind(this),
            "entry-animation": "slide-from-bottom-animation",
            "exit-animation": "slide-down-animation",
            "no-cancel-on-outside-click": true,
            "no-cancel-on-esc-key": true
        };

        return (
            <Portal isOpened={true}>
                <PaperDialog {...paperDialogProps}>
                    {appView}
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

    dialogClose() {
        const {onRequestClose} = this.props;
        if (onRequestClose) onRequestClose();
    }
}
