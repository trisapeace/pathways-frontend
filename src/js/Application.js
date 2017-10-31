import React from 'react';

import {BrowserRouter} from 'react-router-dom';

import routes from 'routes';

import AppViewContainer_Full from 'ui-components/AppViewContainer_Full';

export default class Application extends React.Component {
    /**
     * Base application component. Should contain a top-level component picked
     * via react-router, UI chrome, and any number of overlay components.
     */

    render() {
        return (
            <BrowserRouter>
                <AppViewContainer_Full appView={routes} />
            </BrowserRouter>
        );
    }
}
