import { Request, Response } from 'express';

export function errorHandler(err: Error, req: Request, res: Response) {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'An unexpected error occurred'
  });
}