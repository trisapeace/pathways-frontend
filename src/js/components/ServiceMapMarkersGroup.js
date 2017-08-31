import React from 'react';

import PropTypes from 'prop-types';

import Leaflet from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import {Marker, Popup, Tooltip} from 'react-leaflet';

import Typography from 'material-ui/Typography';

import shouldComponentUpdate from "util/shouldComponentUpdate";

export default class ServiceMapMarkersGroup extends React.Component {
    static propTypes = {
        services: PropTypes.array.isRequired
    };

    constructor() {
        super();
        this._markerIcon = Leaflet.icon({
            iconUrl: '/images/marker-icon.png',
            iconRetinaUrl: '/images/marker-icon-2x.png',
            shadowUrl: '/images/marker-shadow.png',
            iconSize:    [25, 41],
            iconAnchor:  [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize:  [41, 41]
        });
    }

    shouldComponentUpdate(...params) {
        return shouldComponentUpdate(this, ...params);
    }

    render() {
        const {services} = this.props;

        const markers = [];

        for (const service of services) {
            if (service.latitude && service.longitude) {
                const markerProps = {
                    position: Leaflet.latLng(service.latitude, service.longitude),
                    icon: this._markerIcon
                };
                markers.push(
                    <Marker key={`marker-service-${service.id}`} {...markerProps}>
                        <Tooltip>
                            <span>{service.name}</span>
                        </Tooltip>
                        <Popup>
                            <div>
                                <Typography type="body2" gutterBottom={true}>
                                    {service.name}
                                </Typography>
                                <Typography type="body1" component="p">
                                    {service.description}
                                </Typography>
                            </div>
                        </Popup>
                    </Marker>
                );
            }
        }

        return (
            <MarkerClusterGroup wrapperOptions={{enableDefaultStyle: true}}>
                {markers}
            </MarkerClusterGroup>
        );
    }
}
