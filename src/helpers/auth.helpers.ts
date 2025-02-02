import { scrypt as _scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

export async function hashPassword(password: string) {
  // Hash the users password
  // Generate a salt
  const salt = randomBytes(8).toString('hex');
  // Hash the salt and the password together
  const hash = (await scrypt(password, salt, 32)) as Buffer;
  // Join the hashed result and the salt together
  const result = `${salt}.${hash.toString('hex')}`;
  return result;
}
