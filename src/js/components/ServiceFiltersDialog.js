import React from 'react';

import PropTypes from 'prop-types';

import {inject, observer} from 'mobx-react';

import Form from "react-jsonschema-form";

import Portal from 'react-portal';

@inject('locationsStore')
@observer
export default class ServiceFiltersDialog extends React.Component {
    static propTypes = {
        locationsStore: PropTypes.object.isRequired,
        data: PropTypes.object,
        isOpen: PropTypes.bool,
        onDataChange: PropTypes.func,
        onRequestClose: PropTypes.func
    };

    render() {
        const {locationsStore, data, isOpen} = this.props;

        return (
            <Portal isOpened={true}>
                <paper-dialog opened={isOpen} with-backdrop={true} onOverlayClose={this._onOverlayClose.bind(this)}>
                    <h2>Search</h2>
                    <paper-dialog-scrollable>
                        <Form schema={locationsStore.searchSchema} formData={data} onSubmit={this._onFormSubmit.bind(this)}>
                            <button ref={(elem) => {this._submitButton = elem}} hidden={true} />
                        </Form>
                    </paper-dialog-scrollable>
                    <div className="buttons">
                        <paper-button dialog-dismiss>Cancel</paper-button>
                        <paper-button dialog-confirm onClick={this._onOkClick.bind(this)}>Accept</paper-button>
                    </div>
                </paper-dialog>
            </Portal>
        );
    }

    _onFormSubmit({formData}) {
        this.props.onRequestClose();
        this._onDataChange(formData);
    }

    _onOkClick(e) {
        e.preventDefault();
        this._submitButton.click();
    }

    _onDataChange(data) {
        this.props.onDataChange(data);
    }

    _onOverlayClose(e) {
        e.preventDefault();
        this.props.onRequestClose();
    }
}
