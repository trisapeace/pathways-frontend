import React from 'react';

import PropTypes from 'prop-types';

export default class MapAttribution extends React.Component {
    static contextTypes = {
        map: PropTypes.object.isRequired
    };

    componentWillMount() {
        const {map} = this.context;
        map.on('layeradd layerremove', this._onMapLayersChange.bind(this));
    }

    render() {
        const {map} = this.context;

        const mapNotice = [];

        const prefix = `<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>`;
        mapNotice.push(prefix);

        const attributions = [];
        map.eachLayer(
            (layer) => {
                const attribution = layer.getAttribution();
                if (attribution) {
                    attributions.push(attribution);
                }
            }
        );
        mapNotice.push(attributions.join(', '));

        return (
            <div className="map-attribution">
                <small
                    dangerouslySetInnerHTML={{
                        __html: mapNotice.join(' | ')
                    }}
                />
            </div>
        );
    }

    _onMapLayersChange() {
        this.setState({_changed: true});
    }
}
