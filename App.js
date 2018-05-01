// Unfortunately we need to load the Intl polyfill for Android. iOS has Intl
// available natively; we should see it is possibly conditionally load the
// polyfill only when needed.
import 'intl';
// Include Unicode CLDR locale data for each of our locales
import 'intl/locale-data/jsonp/en.js';
import 'intl/locale-data/jsonp/ar.js';

import { Application } from './lib/application';

export default Application;
