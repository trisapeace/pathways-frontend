import React from 'react';

import AppBar from 'material-ui/AppBar';

export default function showView(Component, windowName) {
    const viewOptions = Component.viewOptions || {};

    console.log("VIEW OPTIONS", viewOptions);

    switch (windowName) {
        case 'header': {
            return () => <AppBar title={viewOptions.title} />;
        }

        default: {
            return (props) => <Component {...props} />;
        }
    }
}
