import React from 'react';

import {BrowserRouter} from 'react-router-dom';

import {createRoutes} from 'routes';

import AppViewFull from 'ui-components/AppViewFull';

export default class Pathways extends React.Component {
    /**
     * Base application component. Should contain a top-level component picked
     * via react-router, UI chrome, and any number of overlay components.
     */

    constructor() {
        super();
        this._routes = createRoutes();
    }

    render() {
        return (
            <BrowserRouter>
                <AppViewFull appView={this._routes} />
            </BrowserRouter>
        );
    }
}
