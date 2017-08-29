import React from 'react';

import PropTypes from 'prop-types';

import {Redirect} from 'react-router-dom';

export default class DispatchView extends React.Component {
    static propTypes = {
        location: PropTypes.object,
        computedMatch: PropTypes.object
    };

    render() {
        const target = '/welcome';

        return (
            <Redirect to={target} />
        );
    }
}
