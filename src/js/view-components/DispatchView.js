import React from 'react';

import {Redirect} from 'react-router-dom';

export default class DispatchView extends React.Component {
    render() {
        const target = '/welcome';

        return (
            <Redirect to={target} />
        );
    }
}
