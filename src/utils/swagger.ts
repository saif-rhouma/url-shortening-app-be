import { Express } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { version } from '../../package.json';
import swaggerJSDoc from 'swagger-jsdoc';
import environment from '../configs/environment';

class Swagger {
  private static options: swaggerJsdoc.Options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Shortened URL API',
        version: version,
        description: 'API for shortening URLs, creating QR codes, and tracking visits',
      },
      servers: [
        {
          url: `http://localhost:${environment.PORT}`,
        },
      ],
    },
    apis: ['./src/apis-doc/*.swagger.ts'],
  };

  static settingUp(app: Express) {
    const swaggerSpec = swaggerJSDoc(this.options);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  }
}

export default Swagger;
