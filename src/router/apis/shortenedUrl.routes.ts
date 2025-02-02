import RequestValidator from '../../core/middlewares/requestValidator.middleware';
import shortenedUrlController from '../../core/controllers/shortenedUrl.controller';
import IRouteGroup from 'src/types/IRouteGroup';
import { getUrlDetailsSchema, createShortUrlSchema } from '../../core/middlewares/validators/shortenedUrl';

export const ShortenedUrlRoutes: IRouteGroup = {
  group: {
    prefix: '/',
  },
  routes: [
    {
      method: 'get',
      path: '',
      handler: shortenedUrlController.getAllUrl,
    },
    {
      method: 'post',
      path: '',
      validator: [RequestValidator.body(createShortUrlSchema)],
      handler: shortenedUrlController.createShortUrl,
    },
    {
      method: 'get',
      path: ':shortCode',
      validator: [RequestValidator.params(getUrlDetailsSchema)],
      handler: shortenedUrlController.getUrlDetails,
    },
    {
      method: 'get',
      path: 'qr/:shortCode',
      validator: [RequestValidator.params(getUrlDetailsSchema)],
      handler: shortenedUrlController.getQrImage,
    },
    {
      method: 'get',
      path: 'visit/:shortCode',
      validator: [RequestValidator.params(getUrlDetailsSchema)],
      handler: shortenedUrlController.visit,
    },
  ],
};
