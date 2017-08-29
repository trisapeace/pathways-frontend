import React from 'react';

import PropTypes from 'prop-types';

import {inject, observer} from 'mobx-react';

import Leaflet from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import {Map, Marker, Pane, Popup, TileLayer, Tooltip} from 'react-leaflet';

import Card from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import FilterListIcon from 'material-ui-icons/FilterList';
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

        return (
            <div className="service-map-view">
                <Map center={position} zoom={zoom} maxZoom={maxZoom} attributionControl={false}>
                    <TileLayer
                        attribution={`&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`}
                        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    />
                    <MarkerClusterGroup wrapperOptions={{enableDefaultStyle: true}}>
                        {markers}
                    </MarkerClusterGroup>
                    <ServiceFiltersPane loading={isLoading} />
                </Map>
            </div>
        );
    }
}

class ServiceFiltersPane extends React.Component {
    static contextTypes = {
        map: PropTypes.object.isRequired
    };

    static propTypes = {
        loading: PropTypes.bool
    };

    componentWillMount() {
        const {map} = this.context;
        map.on('layeradd layerremove', this._onLayersChangedCb.bind(this));
    }

    render() {
        const {loading} = this.props;
        const {map} = this.context;

        const loadingElem = (loading) ? <LinearProgress /> : null;

        const attributions = [];

        map.eachLayer(
            (layer) => {
                const attribution = layer.getAttribution();
                if (attribution) {
                    attributions.push(attribution);
                }
            }
        );

        return (
            <Pane className="service-map-filters-pane">
                <Card className="service-map-overlay" elevation={2}>
                    <Grid container direction="column">
                        <Grid item container direction="row" align="center" justify="space-between">
                            <Grid item>
                                <Typography type="body1" component="p">
                                    Summarize selected map filters here.
                                </Typography>
                            </Grid>
                            <Grid item align="flex-end">
                                <IconButton aria-label="Filter">
                                    <FilterListIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography type="caption" component="p">
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: attributions.join(', ')
                                    }}
                                />
                            </Typography>
                        </Grid>
                        <Grid item>
                            {loadingElem}
                        </Grid>
                    </Grid>
                </Card>
            </Pane>
        );
    }

    _onLayersChangedCb() {
        this.setState({_changed: true});
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
