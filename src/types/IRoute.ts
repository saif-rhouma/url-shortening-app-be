import { HTTPRequestMethod } from './HTTPRequestMethod';
import AsyncRouteHandler from './AsyncRouteHandler';
import Middleware from './Middleware';

export interface IRoute {
  method: HTTPRequestMethod;
  path: string;
  middleware?: Middleware<void | unknown>[];
  validator?: Middleware<void | unknown>[];
  handler: AsyncRouteHandler;
}
