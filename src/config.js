import { createApi } from 'unsplash-js';

const APP_ACCESS_KEY = '';

const unsplash = createApi({
    accessKey: APP_ACCESS_KEY
});

export default unsplash;
