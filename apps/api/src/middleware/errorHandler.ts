import { NextFunction, Request, Response } from 'express';
import { logger } from '../utils/logger';

export const errorHandler = (error: Error, _req: Request, res: Response, _next: NextFunction): void => {
  logger.error(error.message, { stack: error.stack });
  res.status(500).json({ error: 'Internal Server Error' });
};
