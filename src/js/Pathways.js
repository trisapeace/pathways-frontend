import React from 'react';

import {BrowserRouter} from 'react-router-dom';

import routes from 'routes';

import AppViewFull from 'ui-components/AppViewFull';

export default class Pathways extends React.Component {
    /**
     * Base application component. Should contain a top-level component picked
     * via react-router, UI chrome, and any number of overlay components.
     */

    render() {
        return (
            <BrowserRouter>
                <AppViewFull appView={routes} />
            </BrowserRouter>
        );
    }
}
