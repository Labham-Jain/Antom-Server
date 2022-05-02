import { Request, Response, NextFunction } from "express";

type MessageType = any


declare module 'express-serve-static-core' {
    interface Response {
        deliver: (message: MessageType) => Response;
    }
    interface Request {
      state: {
        [x: string] : any
      }
    }
}