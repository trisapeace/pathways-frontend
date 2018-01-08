import {Collection, Model} from 'mobx-rest'

import {computed} from 'mobx';

import apiSearchTemplate from 'util/api-mock/search/template.json';

export default class LocationsStore extends Collection {
    url()  { return '/v1/locations/'; }
    model() { return LocationModel; }

    @computed get searchSchema() {
        return {
            type: 'object',
            properties: apiSearchTemplate
        }
    }
}

class LocationModel extends Model {
    @computed get name() {
        return this.get('name');
    }

    @computed get description() {
        return this.get('description');
    }

    @computed get latitude() {
        return this.get('latitude');
    }

    @computed get longitude() {
        return this.get('longitude');
    }

    @computed get latLng() {
        if (this.latitude && this.longitude) {
            return [this.latitude, this.longitude];
        } else {
            return undefined;
        }
    }
}
