import { Request, Response, NextFunction } from 'express';

/**
 * Wraps an async route handler and catches errors, forwarding them to the next middleware.
 * @param fn The async function to wrap.
 * @returns A function that can be used as an Express middleware.
 */
const runAsyncWrapper = (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

export default runAsyncWrapper;
