import React from 'react';

import {Link} from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';

export default class WelcomeView extends React.Component {
    static viewOptions = {
        title: "Welcome",
        parent: null
    };

    render() {
        return (
            <div className="content">
                <p>TODO: Everything else.</p>
                <RaisedButton
                    label="Services"
                    primary={true}
                    containerElement={<Link to="/services" />}
                />
            </div>
        );
    }
}
