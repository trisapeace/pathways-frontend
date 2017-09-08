import React from 'react';
import {Route, Switch} from 'react-router-dom';

import DispatchView from 'views/DispatchView';
import ServiceMapView from 'views/ServiceMapView';
import WelcomeView from 'views/WelcomeView';

export const createRoutes = (frame) => {
    return (
        <Switch>
            <Route exact path="/" component={DispatchView} />,
            <Route path="/welcome" render={WelcomeView.routeRenderFn(frame)} />,
            <Route path="/services" render={ServiceMapView.routeRenderFn(frame)} />
        </Switch>
    );
}
