import React from 'react';

import Leaflet from 'leaflet';
import {Map, TileLayer, Marker, Popup, Tooltip} from 'react-leaflet';

export default class ServiceMapView extends React.Component {
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

    render() {
        const position = [49.2827, -123.1207];
        const zoom = 13;

        const markers = [];

        markers.push(
            <Marker key="marker-1" position={position} icon={this._markerIcon}>
                <Tooltip>
                    <span>A service</span>
                </Tooltip>
                <Popup>
                    <span>This is some information about the service</span>
                </Popup>
            </Marker>
        )

        return (
            <div className="content">
                <h2>Service Map</h2>
                <p>TODO: Show human services loaded from the API.</p>
                <Map center={position} zoom={zoom}>
                    <TileLayer
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    {markers}
                </Map>
            </div>
        );
    }
}
