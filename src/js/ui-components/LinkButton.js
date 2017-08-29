import React from 'react';

import PropTypes from 'prop-types';

import Button from 'material-ui/Button';

export default class LinkButton extends React.PureComponent {
    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    static propTypes = {
        ...Button.propTypes,
        to: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ]),
        replace: PropTypes.bool
    };

    static muiName = 'Button';

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
