import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: 'Unauthorized.'
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const decode = jwt.verify(token, '123!@#456$%¨879&*(0');
    req.body.user = decode;

    next();
  } catch (error: any) {
    return res.status(401).json({
      message: error.message || 'Unauthorized.'
    });
  }
}