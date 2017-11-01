import React from 'react';
import {Route, Switch} from 'react-router-dom';

import AboutView from 'views/AboutView';
import DispatchView from 'views/DispatchView';
import PathwayDetailView from 'views/PathwayDetailView';
import PathwaysListView from 'views/PathwaysListView';
import ServiceMapView from 'views/ServiceMapView';
import WelcomeView from 'views/WelcomeView';

export default (
    <Route render={({location}) => (
        <Switch key={location.key} location={location}>
            <Route exact path="/" component={DispatchView} />,
            <Route exact path="/welcome" component={WelcomeView} />,
            <Route exact path="/about" component={AboutView} />,
            <Route exact path="/pathways" component={PathwaysListView} />,
            <Route exact path="/pathways/:pathwayId" component={PathwayDetailView} />,
            <Route exact path="/services" component={ServiceMapView} />
        </Switch>
    )} />
);
