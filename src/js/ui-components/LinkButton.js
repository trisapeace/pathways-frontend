import React from 'react';

import PropTypes from 'prop-types';

export default class LinkButton extends React.PureComponent {
    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    static propTypes = {
        to: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ]),
        replace: PropTypes.bool
    };

    render() {
        const {to, replace, ...props} = this.props;
        void(to);
        void(replace);
        return <paper-button {...props} onClick={this._onButtonClick.bind(this)} />
    }

    _onButtonClick() {
        const {router} = this.context;
        const {to, replace} = this.props;

        if (replace) {
            router.history.replace(to);
        } else {
            router.history.push(to);
        }
    }
}
