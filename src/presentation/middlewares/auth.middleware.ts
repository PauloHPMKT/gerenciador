import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { makeEnvConfigGlobal } from "../../presentation";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: 'Unauthorized.'
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const configService = makeEnvConfigGlobal();
    const decode = jwt.verify(token, configService.getSecretKey());
    req.body.user = decode;

    next();
  } catch (error: any) {
    return res.status(401).json({
      message: error.message || 'Unauthorized.'
    });
  }
}