import jwt from "jsonwebtoken";
export default function generateToken(payload: any) {
  const token = jwt.sign(payload, process.env.TOKEN_SECRET!, {
    expiresIn: "1D",
  });
  return token;
}

export const verifyToken = (token: string) => {
  const verified = jwt.verify(token, process.env.TOKEN_SECRET!);
  return verified;
};
