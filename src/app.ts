import express, { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import pc from 'picocolors';
import httpLogger from 'morgan';

import environment from './configs/environment';
import Router from './router';
import { Server } from 'http';

class App {
  private app: Express;
  private server: Server;

  constructor() {
    this.app = express();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.app.use(httpLogger('dev', { skip: (_req, _res) => environment.isTest }));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(helmet());
    this.app.use(
      cors({
        credentials: true,
        origin: '*',
        methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'OPTIONS'],
      })
    );
  }

  public start() {
    this._setupRoutes();
    this._listen();
  }

  public close() {
    if (this.server) {
      this.server.close();
    }
  }

  public getApp() {
    return this.app;
  }

  private _setupRoutes() {
    Router.create(this.app);
  }

  private _listen() {
    const { PORT, NODE_ENV } = environment;
    this.server = this.app.listen(PORT, () => {
      console.log(
        pc.inverse(
          pc.cyanBright(
            `Server is Running on port : ${pc.red(PORT)}! | Execution Environment : ${pc.red(NODE_ENV.toLocaleUpperCase())}`
          )
        )
      );
    });
  }
}

export default App;
