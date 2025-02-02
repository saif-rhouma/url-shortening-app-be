import { Response, Request, NextFunction } from 'express';
import Middleware from 'src/types/Middleware';
import { AnyZodObject, ZodError } from 'zod';
import HTTP_CODE from '../constants/httpCode';
import InvalidInputRequestException from '../exceptions/invalidInputRequest.exection';

class RequestValidator {
  private static _setupMiddleware(schema: AnyZodObject, type: 'body' | 'query' | 'params') {
    function setup() {
      return {
        schema: schema,
        reqInputType: type,
      };
    }
    return this._makeMiddleware(setup.bind(this));
  }

  private static _makeMiddleware(setup) {
    return function _validator(req: Request, res: Response, next: NextFunction) {
      const options = setup();
      const { reqInputType, schema } = options;
      try {
        schema.parse(req[reqInputType]);
        next();
      } catch (error: unknown) {
        if (error instanceof ZodError) {
          throw new InvalidInputRequestException(error.errors);
        }
        return res.status(HTTP_CODE.InternalServerError).json({ error: 'Internal Server Error' });
      }
    };
  }

  public static body(schema: AnyZodObject): Middleware<void> {
    return this._setupMiddleware(schema, 'body');
  }

  public static query(schema: AnyZodObject): Middleware<void> {
    return this._setupMiddleware(schema, 'body');
  }

  public static params(schema: AnyZodObject): Middleware<void> {
    return this._setupMiddleware(schema, 'params');
  }
}
export default RequestValidator;
