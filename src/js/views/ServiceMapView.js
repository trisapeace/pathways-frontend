import React from 'react';

import PropTypes from 'prop-types';

import {inject, observer} from 'mobx-react';

import {Pane} from 'react-leaflet';

import SimpleAppView from 'ui-components/SimpleAppView';

import ServiceFiltersCard from 'components/ServiceFiltersCard';
import ServiceFiltersDialog from 'components/ServiceFiltersDialog';
import ServiceMap from 'components/ServiceMap';

@inject('apiStore')
@observer
class ServiceMapView_Main extends React.Component {
    static propTypes = {
        apiStore: PropTypes.object.isRequired
    };

    constructor() {
        super();
        this.state = {
            isFiltersDialogOpen: false
        };
    }

    componentWillMount() {
        // const {apiStore} = this.props;
        // if (!apiStore.isReady) {
        //     apiStore.loadServices();
        // }
    }

    render() {
        const {apiStore} = this.props;

        const isLoading = !apiStore.isReady || apiStore.isLoading;

        return (
            <div className="service-map-view">
                <ServiceMap attributionControl={false}>
                    <Pane className="service-map-filters-pane">
                        <ServiceFiltersCard loading={isLoading} onEditOpen={this._onEditOpen.bind(this)} />
                    </Pane>
                </ServiceMap>
                <ServiceFiltersDialog
                    open={this.state.isFiltersDialogOpen}
                    onRequestClose={this._onEditClose.bind(this)}
                />
            </div>
        );
    }

    _onEditOpen() {
        this.setState({isFiltersDialogOpen: true});
    }

    _onEditClose() {
        this.setState({isFiltersDialogOpen: false});
    }
}

export default class ServiceMapView extends SimpleAppView {
    constructor() {
        super({
            title: "Services",
            parent: '/',
            mainComponent: ServiceMapView_Main
        });
    }
}
