require('paper-button/paper-button.html');

import React from 'react';

export class PaperButton extends React.PureComponent {
    render() {
        return <paper-button {...this.props} />;
    }
}
