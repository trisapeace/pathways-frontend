import React from 'react';
import {Route} from 'react-router-dom'

import showView from 'show-view';

import DispatchView from 'view-components/DispatchView';
import ServiceMapView from 'view-components/ServiceMapView';
import WelcomeView from 'view-components/WelcomeView';

export const createRoutes = (windowName) => {
    return (
        <div>
            <Route exact path="/" component={DispatchView} />
            <Route path="/welcome" render={showView(WelcomeView, windowName)} />
            <Route path="/services" render={showView(ServiceMapView, windowName)} />
        </div>
    );
}
