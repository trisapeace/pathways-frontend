require('paper-listbox/paper-listbox.html');

import PolymerComponent from 'polymer/util/PolymerComponent';

export class PaperListbox extends PolymerComponent {
    static options = {
        element: "paper-listbox",
        events: [
            {event: "iron-activate", callback: "onActivate", preventDefault: true},
            {event: "iron-select", callback: "onSelect", preventDefault: true}
        ]
    };
}
