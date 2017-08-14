import React from 'react';

import PropTypes from 'prop-types';

import Button from 'material-ui/Button';

export default class LinkButton extends React.PureComponent {
    render() {
        const {to, replace, ...props} = this.props;
        void(to);
        void(replace);
        return <Button {...props} onTouchTap={this._onTouchTapCb.bind(this)} />
    }

    _onTouchTapCb() {
        const {router} = this.context;
        const {to, replace} = this.props;replace

        if (replace) {
            router.history.replace(to);
        } else {
            router.history.push(to);
        }
    }
}

LinkButton.propTypes = {
    ...Button.propTypes,
    to: PropTypes.oneOf([
        PropTypes.string,
        PropTypes.object
    ]),
    replace: PropTypes.bool
};

LinkButton.contextTypes = {
    router: PropTypes.object.isRequired
}
