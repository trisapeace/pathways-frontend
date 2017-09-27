import React from 'react';
import {Route, Switch} from 'react-router-dom';

import AboutView from 'views/AboutView';
import DispatchView from 'views/DispatchView';
import ServiceMapView from 'views/ServiceMapView';
import WelcomeView from 'views/WelcomeView';

export default (
    <Route render={({location}) => (
        <Switch key={location.key} location={location}>
            <Route exact path="/" component={DispatchView} />,
            <Route path="/welcome" component={WelcomeView} />,
            <Route path="/about" component={AboutView} />,
            <Route path="/services" component={ServiceMapView} />
        </Switch>
    )} />
);
