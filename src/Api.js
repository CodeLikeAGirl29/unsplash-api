import { createApi } from 'unsplash-js';

const APP_ACCESS_KEY = 'Tkbei_onnYA12fX5wPjNP2UCb0Lx55pRR0doZZfB1ls';

const unsplash = createApi({
    accessKey: APP_ACCESS_KEY
});

export default unsplash;