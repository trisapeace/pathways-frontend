require('app-layout/app-header-layout/app-header-layout.html');

import React from 'react';

import {BrowserRouter} from 'react-router-dom';

import {createRoutes} from 'routes';

/*
 * TODO: Keep track of the current top-level route. We should be able to find
 *       out what its page title is, what its parent route is like with
 *       <https://developer.android.com/training/implementing-navigation/ancestral.html>,
 *       and any extra behaviour our UI chrome should exhibit. This may change
 *       independent of route changes, so we probably want a mechanism that is
 *       disconnected from Router.
 */

export default class Pathways extends React.Component {
    /**
     * Base application component. Should contain a top-level component picked
     * via react-router, UI chrome, and any number of overlay components.
     */
    constructor() {
        super();
        this._mainRoutes = createRoutes('main');
        this._headerRoutes = createRoutes('header');
    }

    render() {
        return (
            <BrowserRouter>
                <app-header-layout fullbleed>
                    {this._headerRoutes}
                    {this._mainRoutes}
                </app-header-layout>
            </BrowserRouter>
        );
    }
}
