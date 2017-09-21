import shallowCompare from "react-addons-shallow-compare";

const DEBUG = process.env.NODE_ENV === 'development';

export default function shouldComponentUpdate(component, nextProps, nextState, nextContext) {
    const shouldUpdate = shallowCompare(component, nextProps, nextState, nextContext);
    if (DEBUG && shouldUpdate) {
        const differences = {
            props: shallowDiff(component.props, nextProps),
            state: shallowDiff(component.state, nextState),
            context: shallowDiff(component.state, nextContext)
        };
        console.debug(`${component.constructor.name} should update?`, shouldUpdate, differences);
    }
    return shouldUpdate;
}

function shallowDiff(prev, next) {
    const diff = [];
    for (let prop in prev) {
        if (prev.hasOwnProperty(prop) && next.hasOwnProperty(prop)) {
            if (prev[prop] !== next[prop]) {
                diff.push({prop, prev: prev[prop], next: next[prop]});
            }
        }
    }
    return diff;
}
