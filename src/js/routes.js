import React from 'react';
import {Route} from 'react-router-dom'

import DispatchView from 'view-components/DispatchView';
import ServiceMapView from 'view-components/ServiceMapView';
import WelcomeView from 'view-components/WelcomeView';

export const createRoutes = (frame) => {
    return (
        <div>
            <Route exact path="/" component={DispatchView} />
            <Route path="/welcome" render={WelcomeView.routeRenderFn(frame)} />
            <Route path="/services" render={ServiceMapView.routeRenderFn(frame)} />
        </div>
    );
}
