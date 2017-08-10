import React from 'react';

import {BrowserRouter} from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
        this._routes = createRoutes();
        this._muiTheme = getMuiTheme();
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={this._muiTheme}>
                <div>
                    <header className="header">
                        <AppBar title="Pathways" />
                    </header>
                    <section className="main">
                        <BrowserRouter>
                            {this._routes}
                        </BrowserRouter>
                    </section>
                </div>
            </MuiThemeProvider>
        );
    }
}
