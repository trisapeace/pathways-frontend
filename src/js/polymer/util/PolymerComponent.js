import React from 'react';

import PropTypes from 'prop-types';

import isFunction from 'is-function';

const DEFAULT_OPTIONS = {
    element: undefined,
    props: [],
    events: []
}

const DEFAULT_EVENT_OPTIONS = {
    event: undefined,
    callback: undefined,
    preventDefault: false
};

export default class PolymerComponent extends React.Component {
    static propTypes = {
        attrs: PropTypes.object,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ])
    };

    /**
     * A dictionary with options for the Polymer component wrapper. Subclasses
     * should override this.
     *
     * - element: The element name, used in the default render function.
     * - props: A list of element properties to expose as component props.
     * - events: A list of objects event options objects.
     *
     * An event options object has the following attributes:
     *
     *  - event: The name of a custom event fired by the web component.
     *  - callback: A private event handler function, or a prop name that will
     *              receive a custom event handler.
     *  - preventDefault: Stop the default event handler. Defaults to false.
     *  - resetProps: A list of prop names for props that must not change
    *                 after this event fires. Use this if an event causes
    *                 side-effects even with preventDefault.
     */

    static options = DEFAULT_OPTIONS;

    get elem() { return this._elem; }

    constructor(props) {
        super(props);

        const options = Object.assign({}, DEFAULT_OPTIONS, this.constructor.options);

        this._elementName = options.element;
        this._polymerProps = options.props;
        this._polymerEvents = options.events.map(
            (eventOptions) => Object.assign({}, DEFAULT_EVENT_OPTIONS, eventOptions)
        );

        this._eventFns = new Map();

        for (const eventOptions of this._polymerEvents) {
            const {event: eventName, callback, preventDefault, resetPropNames} = eventOptions;

            if (isFunction(callback)) {
                this._eventFns.set(eventName, (event) => {
                    if (preventDefault) event.preventDefault();
                    if (callback) callback(event);
                    if (resetPropNames) this._resetPropsForEvent(resetPropNames, event);
                });
            } else if (callback) {
                this._eventFns.set(eventName, (event) => {
                    const callbackFn = this.props[callback];
                    if (preventDefault) event.preventDefault();
                    if (callbackFn) callbackFn(event);
                    if (resetPropNames) this._resetPropsForEvent(resetPropNames, event);
                });
            } else {
                this._eventFns.set(eventName, (event) => {
                    if (preventDefault) event.preventDefault();
                    if (resetPropNames) this._resetPropsForEvent(resetPropNames, event);
                });
            }
        }
    }

    getEvents() {
        return {};
    }

    componentDidMount() {
        this._copyPropertiesToElem();
        for (const [event, eventFn] of this._eventFns.entries()) {
            this._elem.addEventListener(event, eventFn);
        }
    }

    componentWillUnmount() {
        for (const [event, eventFn] of this._eventFns.entries()) {
            this._elem.removeEventListener(event, eventFn);
        }
    }

    componentDidUpdate() {
        this._copyPropertiesToElem();
    }

    _copyPropertiesToElem() {
        for (const [key, value] of Object.entries(this.props)) {
            if (this._polymerProps.includes(key)) {
                this._elem[key] = value;
            }
        }
    }

    render() {
        return this.renderWithProps(this.props);
    }

    renderWithProps(initialProps) {
        const props = {};

        for (const [key, value] of Object.entries(initialProps)) {
            if (!this._polymerProps.includes(key)) {
                props[key] = value;
            }
        }

        return React.createElement(
            this._elementName,
            {
                ref: (elem) => this._elem = elem,
                ...props
            }
        );
    }

    _resetPropsForEvent(propNames, event) {
        propNames.forEach(
            (propName) => {
                if (this.props[propName] !== null) {
                    event.target[propName] = this.props[propName];
                }
            }
        );
    }
}
