require('paper-dialog-scrollable/paper-dialog-scrollable.html');

import React from 'react';

export class PaperDialogScrollable extends React.PureComponent {
    render() {
        return <paper-dialog-scrollable {...this.props} />;
    }
}
