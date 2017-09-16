require('paper-icon-button/paper-icon-button.html');

import React from 'react';

export class PaperIconButton extends React.PureComponent {
    render() {
        return <paper-icon-button {...this.props} />;
    }
}
