require('neon-animation/neon-animatable.html');
require('neon-animation/neon-animated-pages.html');

import PropTypes from 'prop-types';

import PolymerComponent from 'polymer/util/PolymerComponent';

export class NeonAnimatable extends PolymerComponent {
    static options = {
        element: "neon-animatable"
    };
}

export class NeonAnimatedPages extends PolymerComponent {
    static propTypes = {
        ...PolymerComponent.propTypes,
        onAnimationFinished: PropTypes.func
    };

    static options = {
        element: "neon-animatable",
        events: [
            {event: 'neon-animation-finish', callback: 'onAnimationFinished'}
        ]
    };

    selectIndex(index) {
        this.elem.selectIndex(index);
    }
}
