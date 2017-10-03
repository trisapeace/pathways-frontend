require('paper-dialog/paper-dialog.html');

import PropTypes from 'prop-types';

import PolymerComponent from 'polymer/util/PolymerComponent';

export class PaperDialog extends PolymerComponent {
    static propTypes = {
        ...PolymerComponent.propTypes,
        opened: PropTypes.bool,
        onCancel: PropTypes.func,
        onClose: PropTypes.func,
        onOpen: PropTypes.func,
        onResize: PropTypes.func
    };

    static options = {
        element: "paper-dialog",
        props: [
            'opened'
        ],
        events: [
            {event: "iron-overlay-cancelled", callback: "onCancel"},
            {event: "iron-overlay-closed", callback: "onClose", preventDefault: true},
            {event: "iron-overlay-opened", callback: "onOpen", preventDefault: true},
            {event: "iron-resize", callback: "onResize"}
        ]
    };

    constructor(props) {
        super(props);
        this._onOpenedChangedFn = this._onOpenedChanged.bind(this);
        this._onAnimationFinishedFn = this._onAnimationFinished.bind(this);
        this.state = {
            visible: props.opened
        };
    }

    componentDidMount() {
        super.componentDidMount();
        this.elem.addEventListener("opened-changed", this._onOpenedChangedFn);
        this.elem.addEventListener("neon-animation-finish", this._onAnimationFinishedFn);
    }

    componentWillUnmount() {
        super.componentWillUnmount();
        this.elem.removeEventListener("opened-changed", this._onOpenedChangedFn);
        this.elem.removeEventListener("neon-animation-finish", this._onAnimationFinishedFn);
    }

    componentWillReceiveProps(nextProps) {
        // Keep track of whether the dialog is visible so we can stop when it
        // is closed. When there is an animation, we expect the state to be
        // updated after the animation, in this._onAnimationFinished.
        const animationConfig = this.elem.animationConfig || {};
        if (nextProps.opened && !animationConfig.enter) {
            this.setState({visible: true});
        } else if (!nextProps.opened && !animationConfig.exit) {
            this.setState({visible: false});
        }
    }

    _onOpenedChanged(e) {
        // The "iron-overlay-opened" event seems to fire a bit late when the dialog is
        // revealed, so we'll fake it.
        const {value} = e.detail;
        if (value === true) {
            if (this.props.onOpenStart) this.props.onOpenStart(e);
        }
    }

    _onAnimationFinished() {
        const visible = this.props.opened;
        if (this.state.visible !== visible) {
            this.setState({visible});
        }
    }

    render() {
        const {children, ...other} = this.props;
        return this.renderWithProps({
            ...other,
            children: (this.state.visible) ? children : null
        });
    }
}
