import React from 'react';

import PropTypes from 'prop-types';

export default class ProgressCircle extends React.PureComponent {
    static propTypes = {
        start: PropTypes.number.isRequired,
        end: PropTypes.number.isRequired
    };

    render() {
        const {start, end, ...other} = this.props;

        const border = 4;
        const offset = -0.5 * Math.PI;
        let pathElem = null;

        if (end - start < 1) {
            const startRad = (start) * 2 * Math.PI;
            const endRad = (end) * 2 * Math.PI;
            const path = this._path(25, 25, 25 - border, startRad + offset, endRad + offset);
            pathElem = <path d={path} strokeWidth={3} />;
        } else {
            pathElem = <circle cx={25} cy={25} r={25 - border} strokeWidth={3} />;
        }

        return (
            <svg width="100%" height="100%" viewBox="0 0 50 50" {...other}>
                <circle cx={25} cy={25} r={25 - border} strokeWidth={1} stroke="currentColor" />
                {pathElem}
            </svg>
        );
    }

    _path(cx, cy, r, start, end) {
        const length = end - start;
        if (length === 0) return [];

        const fromX = r * Math.cos(start) + cx;
        const fromY = r * Math.sin(start) + cy;
        const toX = r * Math.cos(end) + cx;
        const toY = r * Math.sin(end) + cy;
        const large = Math.abs(length) <= Math.PI ? '0' : '1';
        const sweep = length < 0 ? '0' : '1';

        return [
            ['M', fromX, fromY].join(' '),
            ['A', r, r, 0, large, sweep, toX, toY].join(' ')
        ].join(' ');
    }
}
