import express, { Express, Router as IRouter } from 'express';
import { ExampleRoutes } from './apis/example.routes';
import { ShortenedUrlRoutes } from './apis/shortenedUrl.routes';
import HTTP_CODE from '../core/constants/httpCode';
import IRouteGroup from '../types/IRouteGroup';
import runAsyncWrapper from '../utils/runAsyncWrapper';
import Swagger from '../utils/swagger';

class Router {
  router: IRouter;

  exampleRoutes: IRouteGroup;
  shortenedUrlRoutes: IRouteGroup;

  constructor() {
    this.router = express.Router();
    this.exampleRoutes = ExampleRoutes;
    this.shortenedUrlRoutes = ShortenedUrlRoutes;
  }

  public create(app: Express) {
    // TODO : attach middleware
    this._handleExampleAPI();
    this._handleShortenedUrlAPI();
    this._handlePageNotFound();
    this._handleExceptions();
    this._handleSwaggerDocs(app);
    app.use(this.router);
  }

  private _handlePageNotFound() {
    this.router.all('*', async (_req, res) => {
      res.status(HTTP_CODE.NotFound).send('Page Not Found');
    });
  }

  private _handleExceptions() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.router.use((err, _req, res, _next) => {
      err.statusCode = err.status || err.statusCode || HTTP_CODE.InternalServerError;
      return res.status(err.statusCode).json({
        errorCode: err.message,
        statusCode: err.status,
        details: err.details,
      });
    });
  }

  private _handleSwaggerDocs(app: Express) {
    Swagger.settingUp(app);
  }

  //! Apis Routes

  private _handleShortenedUrlAPI() {
    this._attachRoutes(this.shortenedUrlRoutes, '/api');
  }

  private _handleExampleAPI() {
    this._attachRoutes(this.exampleRoutes, '/api/test');
  }

  private _attachRoutes(routeGroup: IRouteGroup, prefix: string = '') {
    [routeGroup].forEach(({ group, routes }) => {
      routes.forEach(({ method, path, middleware = [], validator = [], handler }) => {
        this.router[method](
          prefix + group.prefix + path,
          [...(group.middleware || []), ...middleware],
          [...validator],
          runAsyncWrapper(handler)
        );
      });
    });
  }
}

export default new Router();
