/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
import 'express';

declare global {
  namespace Express {
    interface Request {
      user?: string | Record<string, any>;
    }
  }
}
