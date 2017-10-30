require('paper-item/paper-item.html');
require('paper-item/paper-item-body.html');
require('paper-item/paper-icon-item.html');

import PropTypes from 'prop-types';

import PolymerComponent from 'polymer/util/PolymerComponent';

export class PaperItem extends PolymerComponent {
    static propTypes = {
        ...PolymerComponent.propTypes,
        onFocusedChanged: PropTypes.func
    };

    static options = {
        element: "paper-item",
        events: [
            {event: "active-changed", callback: "onActiveChanged", preventDefault: true},
            {event: "focused-changed", callback: "onFocusedChanged", preventDefault: true}
        ]
    };
}

export class PaperItemBody extends PolymerComponent {
    static options = {
        element: "paper-item-body"
    };
}

export class PaperIconItem extends PolymerComponent {
    static options = {
        element: "paper-icon-item"
    };
}
