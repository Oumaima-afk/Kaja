import * as argon2 from 'argon2';

export async function hashData(data: string): Promise<string> {
  return argon2.hash(data, { type: argon2.argon2id });
}

export const compareHash = (data: string, hash: string): Promise<boolean> =>
  argon2.verify(hash, data);
