import React from 'react';

import PropTypes from 'prop-types';

import {inject, observer} from 'mobx-react';

import Form from "react-jsonschema-form";

import Button from 'material-ui/Button';
import Dialog, {DialogActions, DialogContent, DialogTitle} from 'material-ui/Dialog';

@inject('locationsStore')
@observer
export default class ServiceFiltersDialog extends React.Component {
    static propTypes = {
        locationsStore: PropTypes.object.isRequired,
        data: PropTypes.object,
        onDataChange: PropTypes.func,
        onRequestClose: PropTypes.func
    };

    render() {
        const {locationsStore, data, onDataChange, ...other} = this.props;

        void(onDataChange);

        return (
            <Dialog maxWidth="md" {...other}>
                <DialogTitle>Search</DialogTitle>
                <DialogContent>
                    <Form schema={locationsStore.searchSchema} formData={data} onSubmit={this._onFormSubmit.bind(this)}>
                        <button ref={(elem) => {this._submitButton = elem}} hidden={true} />
                    </Form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this._onCancelClick.bind(this)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this._onOkClick.bind(this)} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

    _onFormSubmit({formData}) {
        this._onRequestClose();
        this._onDataChange(formData);
    }

    _onOkClick() {
        this._submitButton.click();
    }

    _onCancelClick() {
        this._onRequestClose();
    }

    _onDataChange(data) {
        this.props.onDataChange(data);
    }

    _onRequestClose() {
        this.props.onRequestClose();
    }
}
