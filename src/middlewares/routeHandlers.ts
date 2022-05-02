import { NextFunction, Request, Response } from 'express';

type ResponseType = {
  message?: string;
  data?: any;
  status: number;
}

const routeHandler = (req: Request, res: Response, next: NextFunction) => {
  res.deliver = (data) => {
    const status = res.statusCode;

    const response: ResponseType = { status };

    if (status !== 200 && typeof data === 'string') {
      response.message = data;
    } else {
      response.data = data;
    }

    return res.json(response);
  };

  return next();
};

export default routeHandler;
