import { nanoid } from "nanoid";

export default function generateRandomString(len: number): string {
  return nanoid(len);
}
