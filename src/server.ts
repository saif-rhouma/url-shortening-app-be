import './configs';

import Database from './database';

(async () => {
  try {
    await Database.connect();
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const App = require('./app').default;
    const app = new App();
    app.start();
  } catch (error) {
    console.info(`Something went wrong when initializing the app ${error} `);
  }
})();
