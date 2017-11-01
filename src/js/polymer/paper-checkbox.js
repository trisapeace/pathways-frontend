require('paper-checkbox/paper-checkbox.html');

import PolymerComponent from 'polymer/util/PolymerComponent';

export class PaperCheckbox extends PolymerComponent {
    static options = {
        element: "paper-checkbox",
        events: [
            {event: "change", callback: "onChange", preventDefault: true, resetProps: ['checked']}
        ]
    };
}
