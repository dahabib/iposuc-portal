import jwt, { type JwtPayload } from "jsonwebtoken";
import { variables } from "./variables";

export const createJWT = (userId: string) => {
  return jwt.sign(
    {
      id: userId,
    },
    variables.private_key,
    { expiresIn: "15m" }
  );
};

export const verifyJWT = (token: any) => {
  return jwt.verify(token, variables.private_key) as JwtPayload;
};
