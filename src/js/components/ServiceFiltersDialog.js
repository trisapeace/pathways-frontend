import React from 'react';

import PropTypes from 'prop-types';

import {inject, observer} from 'mobx-react';

import Form from "react-jsonschema-form";

import Button from 'material-ui/Button';
import Dialog, {DialogActions, DialogContent, DialogTitle} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';

@inject('apiStore')
@observer
export default class ServiceFiltersDialog extends React.Component {
    static propTypes = {
        apiStore: PropTypes.object.isRequired,
        onRequestClose: PropTypes.func
    };

    render() {
        const {apiStore} = this.props;

        return (
            <Dialog maxWidth="md" {...this.props}>
                <DialogTitle>Search</DialogTitle>
                <DialogContent>
                    <Form schema={apiStore.searchSchema} onSubmit={this._onFormSubmit.bind(this)}>
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
        console.log("Form submitted", formData);
        this._onRequestClose();
    }

    _onOkClick() {
        this._submitButton.click();
    }

    _onCancelClick() {
        this._onRequestClose();
    }

    _onRequestClose() {
        this.props.onRequestClose();
    }
}
