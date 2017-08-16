import React from 'react';

import PropTypes from 'prop-types';

import {inject, observer} from 'mobx-react';

import Leaflet from 'leaflet';
import {Map, TileLayer, Marker, Popup, Tooltip} from 'react-leaflet';

import Typography from 'material-ui/Typography';
import {LinearProgress} from 'material-ui/Progress';

import SimpleAppView from 'ui-components/SimpleAppView';

@inject('apiStore')
@observer
class ServiceMapView_Main extends React.Component {
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

    componentWillMount() {
        const {apiStore} = this.props;
        if (!apiStore.isReady) {
            apiStore.loadServices();
        }
    }

    render() {
        const {apiStore} = this.props;

        const position = [49.2827, -123.1207];
        const zoom = 13;

        let mapElem;

        if (!apiStore.isLoading) {
            const markers = [];

            for (const service of apiStore.allServices) {
                if (service && service.id) markers.push(
                    <Marker key={`marker-service-${service.id}`} position={[service.latitude, service.longitude]} icon={this._markerIcon}>
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

            mapElem = (
                <Map center={position} zoom={zoom}>
                    <TileLayer
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    {markers}
                </Map>
            );
        } else {
            mapElem = <LinearProgress />;
        }

        return (
            <div className="content">
                <Typography type="body1" component="p" gutterBottom={true}>
                    TODO: Show human services loaded from the API.
                </Typography>
                {mapElem}
            </div>
        );
    }
}

ServiceMapView_Main.wrappedComponent.propTypes = {
    apiStore: PropTypes.object.isRequired
};

export default class ServiceMapView extends SimpleAppView {
    constructor() {
        super({
            title: "Services",
            parent: '/',
            mainComponent: ServiceMapView_Main
        });
    }
}
