require('paper-progress/paper-progress.html');

import React from 'react';

export class PaperProgress extends React.PureComponent {
    render() {
        return <paper-progress {...this.props} />;
    }
}
