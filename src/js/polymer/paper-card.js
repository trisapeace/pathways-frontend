require('paper-card/paper-card.html');

import React from 'react';

export class PaperCard extends React.Component {
    render() {
        return <paper-card {...this.props} />;
    }
}
