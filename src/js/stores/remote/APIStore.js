import URL from 'url';
import {action, computed, observable} from 'mobx';
import {Store, Record} from 'mobx-jsonapi-store';
import {config as jsonapiConfig} from 'mobx-jsonapi-store';

import apiSearchTemplate from 'util/api-mock/search/template.json';

import config from 'config';

// For some reason the person who made this module thinks it makes perfect
// sense to store base URL in what is essentially a global variable. I don't
// like it either.
jsonapiConfig.baseUrl = URL.format({...config.api, pathname: '/'});

// Massage response data into something resembling the JSON API Spec.
// TODO: The backend should just return data in this format.
const defaultBaseFetch = jsonapiConfig.baseFetch;
jsonapiConfig.baseFetch = async (method, url, body, requestHeaders) => {
    const response = await defaultBaseFetch.call(jsonapiConfig, method, url, body, requestHeaders);
    const formattedData = {
        links: {
            self: url
        },
        data: Array.from(response.data, (record) => Object({type: 'location', id: record.id, attributes: record}))
    };
    response.data = formattedData;
    return response;
};

class LocationRecord extends Record {}
LocationRecord.type = 'location';
LocationRecord.endpoint = 'locations';
LocationRecord.defaults = {
    id: null,
    organization_id: null,
    name: null,
    description: null,
    latitude: null,
    longitude: null
};

class JSONAPIStore extends Store {}
JSONAPIStore.types = [LocationRecord];

export default class APIStore {
    @observable _loading = false;
    @observable _ready = false;

    constructor() {
        this._apiStore = new JSONAPIStore();
    }

    @computed get searchSchema() {
        return {
            type: 'object',
            properties: apiSearchTemplate
        }
    }

    async loadServices() {
        this._setLoading(true);
        await this._apiStore.fetchAll('location');
        this._setLoading(false);
        this._setReady(true);
    }

    @computed get allServices() {
        return this._apiStore.findAll('location');
    }

    @action _setLoading(loading) {
        this._loading = loading;
    }

    @computed get isLoading() {
        return this._loading;
    }

    @action _setReady(ready) {
        this._ready = ready;
    }

    @computed get isReady() {
        return this._ready;
    }
}
