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
            searchData: null,
            isFiltersDialogOpen: false
        };
    }

    componentWillMount() {
        const {apiStore} = this.props;
        if (!apiStore.isReady) {
            apiStore.loadServices();
        }
    }

    render() {
        const {apiStore} = this.props;
        const {searchData} = this.state;

        const isLoading = !apiStore.isReady || apiStore.isLoading;

        return (
            <div className="service-map-view">
                <ServiceMap attributionControl={false}>
                    <Pane className="service-map-filters-pane">
                        <ServiceFiltersCard
                            loading={isLoading}
                            onEditOpen={this._onEditOpen.bind(this)}
                        />
                    </Pane>
                </ServiceMap>
                <ServiceFiltersDialog
                    data={searchData}
                    open={this.state.isFiltersDialogOpen}
                    onDataChange={this._onEditDataChange.bind(this)}
                    onRequestClose={this._onEditRequestClose.bind(this)}
                />
            </div>
        );
    }

    _onEditOpen() {
        this.setState({isFiltersDialogOpen: true});
    }

    _onEditDataChange(data) {
        this.setState({searchData: data});
    }

    _onEditRequestClose() {
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
