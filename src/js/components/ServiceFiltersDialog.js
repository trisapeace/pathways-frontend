import React from 'react';

import PropTypes from 'prop-types';

import Button from 'material-ui/Button';
import Dialog, {DialogActions, DialogContent, DialogTitle} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';

export default class ServiceFiltersDialog extends React.Component {
    static propTypes = {
        onRequestClose: PropTypes.func
    };

    render() {
        return (
            <Dialog maxWidth="md" {...this.props}>
                <DialogTitle>Search</DialogTitle>
                <DialogContent>
                    <Typography type="caption" component="p">
                        Filter form goes here.
                    </Typography>
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

    _onRequestClose() {
        this.props.onRequestClose();
    }

    _onCancelClick() {
        this.props.onRequestClose();
    }

    _onOkClick() {
        this.props.onRequestClose();
    }
}
