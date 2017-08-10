import React from 'react';

import {Link} from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';

export default class WelcomeView extends React.Component {
    render() {
        return (
            <div className="content">
                <h2>Welcome</h2>
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
