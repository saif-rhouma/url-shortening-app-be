import { IRoute } from './IRoute';

export default interface IRouteGroup {
  group: {
    prefix: string;
    middleware?: [];
  };
  routes: IRoute[];
}
