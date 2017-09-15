require('paper-card/paper-card.html');

import React from 'react';

export class PaperCard extends React.PureComponent {
    render() {
        return <paper-card {...this.props} />;
    }
}
