import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "sadgfasdfsda";

interface JwtPayload {
  id: number;
  email: string;
}

declare module "express-serve-static-core" {
  interface Request {
    user?: JwtPayload;
  }
}

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Response | void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token não encontrado" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token inválido ou expirado" });
  }
}
