require('paper-item/paper-item.html');
require('paper-item/paper-item-body.html');
require('paper-item/paper-icon-item.html');

import PolymerComponent from 'polymer/util/PolymerComponent';

export class PaperItem extends PolymerComponent {
    static options = {
        element: "paper-item"
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
