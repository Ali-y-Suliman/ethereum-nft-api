import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export const validateAddress = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    address: Joi.string()
      .pattern(/^0x[a-fA-F0-9]{40}$/)
      .required(),
  });

  const { error } = schema.validate(req.params);
  if (error) {
    return res.status(400).json({ status: 'error', message: error.details[0].message });
  }

  next();
};
