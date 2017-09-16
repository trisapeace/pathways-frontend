require('app-layout/app-layout.html');

import React from 'react';

export class AppBox extends React.Component {
    render() {
        return <app-box {...this.props} />;
    }
}

export class AppDrawerLayout extends React.Component {
    render() {
        return <app-drawer-layout {...this.props} />;
    }
}

export class AppDrawer extends React.Component {
    render() {
        return <app-drawer {...this.props} />;
    }
}

export class AppHeaderLayout extends React.Component {
    render() {
        return <app-header-layout {...this.props} />;
    }
}

export class AppHeader extends React.Component {
    render() {
        return <app-header {...this.props} />;
    }
}

export class AppToolbar extends React.Component {
    render() {
        return <app-toolbar {...this.props} />;
    }
}
