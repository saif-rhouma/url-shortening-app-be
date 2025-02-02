import { type Request, type Response, type NextFunction } from 'express';

type Middleware<T> = (
  req: Request,
  res: Response<T>,
  next: NextFunction,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...args: any[]
) => void;

export default Middleware;
