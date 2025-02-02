import IRouteGroup from 'src/types/IRouteGroup';
import exampleController from '../../core/controllers/example.controller';

export const ExampleRoutes: IRouteGroup = {
  group: {
    prefix: '/example',
  },
  routes: [
    {
      method: 'get',
      path: '/',
      handler: exampleController.public,
    },
  ],
};
