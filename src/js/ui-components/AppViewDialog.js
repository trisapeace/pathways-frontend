import React from 'react';

import PropTypes from 'prop-types';

import {inject, observer} from 'mobx-react';

import Form from 'react-jsonschema-form';

import Portal from 'react-portal';

import {PaperButton} from 'polymer/paper-button';
import {PaperDialog} from 'polymer/paper-dialog';
import {PaperDialogScrollable} from 'polymer/paper-dialog-scrollable';

import AppViewFrame from 'ui-components/AppViewFrame';

export default class AppViewDialog extends React.Component {
    static propTypes = {
        appView: PropTypes.node.isRequired,
        isOpen: PropTypes.bool,
        onRequestClose: PropTypes.func
    };

    render() {
        const {path, appViewProps, isOpen, onRequestClose} = this.props;

        return (
            <Portal isOpened={true}>
                <PaperDialog opened={isOpen} onClose={onRequestClose}>
                    <AppViewFrame frame="header" appView={appView} />
                    <PaperDialogScrollable>
                        <AppViewFrame frame="main" appView={appView} />
                    </PaperDialogScrollable>
                </PaperDialog>
            </Portal>
        );
    }
}
