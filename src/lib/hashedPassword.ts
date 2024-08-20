import bcrypt from "bcryptjs";

export default async function hashedPassword(password: string, salt?: number) {
  const saltRound = await bcrypt.genSalt(salt || 10);
  const hashed = await bcrypt.hash(password, saltRound);
  return hashed;
}
export async function comparePassword(password: string, hPassword: string) {
  const isMatch = await bcrypt.compare(password, hPassword);
  return isMatch;
}
