import React from 'react';

import PropTypes from 'prop-types';

import Leaflet from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import {Marker, Popup, Tooltip} from 'react-leaflet';

import Typography from 'material-ui/Typography';

import shouldComponentUpdate from "util/shouldComponentUpdate";

export default class LocationMapMarkersGroup extends React.Component {
    static propTypes = {
        locations: PropTypes.array.isRequired
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
        const {locations} = this.props;

        const markers = [];

        for (const location of locations) {
            if (location.latLng) {
                const markerProps = {
                    position: Leaflet.latLng(location.latLng),
                    icon: this._markerIcon
                };
                markers.push(
                    <Marker key={`marker-location-${location.id}`} {...markerProps}>
                        <Tooltip>
                            <span>{location.name}</span>
                        </Tooltip>
                        <Popup>
                            <div>
                                <Typography type="body2" gutterBottom={true}>
                                    {location.name}
                                </Typography>
                                <Typography type="body1" component="p">
                                    {location.description}
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
