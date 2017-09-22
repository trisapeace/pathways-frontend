// Slightly modernized version of react-with-context, from
// <https://github.com/mattzeunert/react-with-context>.

import React from 'react';

import deepEqual from 'deep-equal';

import PropTypes from 'prop-types';

export default class WithContext extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        context: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {
            DynamicWithContext: getDynamicWithContext(props.context)
        };
    }

    componentWillReceiveProps(nextProps) {
        if (!deepEqual(nextProps.context, this.props.context)) {
            this.setState({
                DynamicWithContext: getDynamicWithContext(nextProps.context)
            });
        }
    }

    render() {
        const {DynamicWithContext} = this.state;
        return <DynamicWithContext {...this.props} />;
    }
}

function getDynamicWithContext(context) {
    class DynamicWithContext extends React.Component {
        static propTypes = {
            children: PropTypes.node.isRequired,
            context: PropTypes.object
        };

        static childContextTypes = {};

        getChildContext() {
            return this.props.context;
        }

        render() {
            return this.props.children;
        }
    }

    for (const propertyName of Object.keys(context)) {
        DynamicWithContext.childContextTypes[propertyName] = PropTypes.any;
    }

    return DynamicWithContext;
}
