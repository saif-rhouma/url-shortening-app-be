import AsyncRouteHandler from 'src/types/AsyncRouteHandler';
import HTTP_CODE from '../constants/httpCode';
import { Request, Response } from 'express';

class ExampleController {
  authProtected: AsyncRouteHandler = async (_req: Request, res: Response) => {
    res.status(HTTP_CODE.Ok).json('Protected Route TEST');
  };

  public: AsyncRouteHandler = async (_req: Request, res: Response) => {
    const taskList = [
      { id: 1, title: 'walk the dog', isDone: false },
      { id: 2, title: 'wash dishes', isDone: false },
      { id: 3, title: 'drink coffee', isDone: true },
      { id: 4, title: 'take a nap', isDone: false },
    ];
    res.status(HTTP_CODE.Ok).json(taskList);
  };
}

export default new ExampleController();
