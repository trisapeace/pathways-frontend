import React from 'react';

import {BrowserRouter, Switch} from 'react-router-dom';

import createPalette from 'material-ui/styles/palette';
import createMuiTheme from 'material-ui/styles/theme';
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

const theme = createMuiTheme({
    palette: createPalette({}),
});

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
            <MuiThemeProvider theme={theme}>
                <BrowserRouter>
                    <div>
                        <Switch>
                            {this._headerRoutes}
                        </Switch>
                        <section className="main">
                            <Switch>
                                {this._mainRoutes}
                            </Switch>
                        </section>
                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}
