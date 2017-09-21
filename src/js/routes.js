import React from 'react';
import {Route, Switch} from 'react-router-dom';

import DispatchView from 'views/DispatchView';
import ServiceMapView from 'views/ServiceMapView';
import WelcomeView from 'views/WelcomeView';

export default (
    <Switch>
        <Route exact path="/" component={DispatchView} />,
        <Route path="/welcome" component={WelcomeView} />,
        <Route path="/services" component={ServiceMapView} />
    </Switch>
);
