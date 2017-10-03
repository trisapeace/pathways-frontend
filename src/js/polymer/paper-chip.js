require('paper-chip/paper-chip.html');

import PropTypes from 'prop-types';

import PolymerComponent from 'polymer/util/PolymerComponent';

export class PaperChip extends PolymerComponent {
    static propTypes = {
        ...PolymerComponent.propTypes,
        onRemove: PropTypes.func
    };

    static options = {
        element: "paper-chip",
        events: [
            {event: "remove", callback: "onRemove", preventDefault: true}
        ]
    };
}
