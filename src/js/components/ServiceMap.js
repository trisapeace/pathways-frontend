import React from 'react';

import PropTypes from 'prop-types';

import {inject, observer} from 'mobx-react';

import {Map, TileLayer} from 'react-leaflet';

import ServiceMapMarkersGroup from 'components/ServiceMapMarkersGroup';

@inject('apiStore')
@observer
export default class ServiceMap extends React.Component {
    static propTypes = {
        apiStore: PropTypes.object.isRequired,
        children: PropTypes.object
    };

    render() {
        const {apiStore, children, ...other} = this.props;

        const position = [49.2827, -123.1207];
        const zoom = 13;
        const maxZoom = 15;
        const allServices = apiStore.allServices;

        return (
            <Map center={position} zoom={zoom} maxZoom={maxZoom} {...other}>
                <TileLayer
                    attribution={`&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`}
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />
                <ServiceMapMarkersGroup services={allServices} />
                {children}
            </Map>
        );
    }
}
