import React from 'react';
import {Route} from 'react-router-dom'

import DispatchView from 'view-components/DispatchView';
import ServiceMapView from 'view-components/ServiceMapView';
import WelcomeView from 'view-components/WelcomeView';

export const createRoutes = () => {
    return (
        <div>
            <Route exact path="/" component={DispatchView} />
            <Route path="/welcome" component={WelcomeView} />
            <Route path="/services" component={ServiceMapView} />
        </div>
    );
}
