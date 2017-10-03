require('app-layout/app-layout.html');

import PolymerComponent from 'polymer/util/PolymerComponent';

export class AppBox extends PolymerComponent {
    static options = {
        element: "app-box"
    };
}

export class AppDrawerLayout extends PolymerComponent {
    static options = {
        element: "app-drawer-layout"
    };
}

export class AppDrawer extends PolymerComponent {
    static options = {
        element: "app-drawer"
    };
}

export class AppHeaderLayout extends PolymerComponent {
    static options = {
        element: "app-header-layout"
    };
}

export class AppHeader extends PolymerComponent {
    static options = {
        element: "app-header"
    };
}

export class AppToolbar extends PolymerComponent {
    static options = {
        element: "app-toolbar"
    };
}
