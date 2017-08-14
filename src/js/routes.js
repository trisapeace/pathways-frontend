import React from 'react';
import {Route} from 'react-router-dom'

import DispatchView from 'views/DispatchView';
import ServiceMapView from 'views/ServiceMapView';
import WelcomeView from 'views/WelcomeView';

export const createRoutes = (frame) => {
    return (
        <div>
            <Route exact path="/" component={DispatchView} />
            <Route path="/welcome" render={WelcomeView.routeRenderFn(frame)} />
            <Route path="/services" render={ServiceMapView.routeRenderFn(frame)} />
        </div>
    );
}
