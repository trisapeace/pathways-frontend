import React from 'react';

import PropTypes from 'prop-types';

import {inject, observer} from 'mobx-react';

import Leaflet from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import {Map, Marker, Popup, TileLayer, Tooltip} from 'react-leaflet';

import Typography from 'material-ui/Typography';
import Card from 'material-ui/Card';
import {LinearProgress} from 'material-ui/Progress';

import SimpleAppView from 'ui-components/SimpleAppView';

@inject('apiStore')
@observer
class ServiceMapView_Main extends React.Component {
    static propTypes = {
        apiStore: PropTypes.object.isRequired
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

    componentWillMount() {
        const {apiStore} = this.props;
        if (!apiStore.isReady) {
            apiStore.loadServices();
        }
    }

    render() {
        const {apiStore} = this.props;

        const isLoading = !apiStore.isReady || apiStore.isLoading;
        const loadingElem = (isLoading) ? <LinearProgress /> : null;

        const markers = [];

        for (const service of apiStore.allServices) {
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

        const position = [49.2827, -123.1207];
        const zoom = 13;
        const maxZoom = 15;

        const mapElem = (
            <Map center={position} zoom={zoom} maxZoom={maxZoom}>
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <MarkerClusterGroup wrapperOptions={{enableDefaultStyle: true}}>
                    {markers}
                </MarkerClusterGroup>
            </Map>
        );

        // TODO: We should place attribution inside service-map-overlay

        return (
            <div className="service-map-view">
                {mapElem}
                <Card className="service-map-overlay" elevation={2}>
                    <Typography type="body1" component="p">
                        Summarize selected map filters here
                    </Typography>
                    {loadingElem}
                </Card>
            </div>
        );
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
