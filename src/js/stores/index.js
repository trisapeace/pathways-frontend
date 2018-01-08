import LocationsStore from 'stores/remote/LocationsStore';
import PathwaysStore from 'stores/remote/PathwaysStore';

const serviceProvidersStore = new LocationsStore();
const pathwaysStore = new PathwaysStore();

export default {
    serviceProvidersStore,
    pathwaysStore
};
