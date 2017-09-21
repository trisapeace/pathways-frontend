import React from 'react';

import PropTypes from 'prop-types';

import Portal from 'react-portal';

import {PaperDialog} from 'polymer/paper-dialog';

import AppViewFrame from 'ui-components/AppViewFrame';

// FIXME: When this contains a leaflet map, we need to call
//        leafletMap.invalidateSize() after it is revealed. Something
//        appears to be happening in the wrong order.

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
            "entry-animation": "slide-from-bottom-animation",
            "exit-animation": "slide-down-animation"
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
}
