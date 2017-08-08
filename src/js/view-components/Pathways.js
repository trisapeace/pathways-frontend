import React from 'react';

import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme();

export default class Pathways extends React.Component {
    /**
     * Base application component. Should contain a top-level component picked
     * via react-router, UI chrome, and any number of overlay components.
     */

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <header className="header">
                        <AppBar title="Pathways" />
                    </header>
                    <section className="main">
                        <div className="content">
                            <p>TODO: Everything else.</p>
                        </div>
                    </section>
                </div>
            </MuiThemeProvider>
        );
    }
}

Pathways.propTypes = {
};
