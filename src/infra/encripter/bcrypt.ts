import * as bcrypt from 'bcrypt';
import { EncriptAdapter } from '../adapters/encriptAdapter/encript.adapter';

export class Encripter implements EncriptAdapter {
  async encrypt(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }

  async compare(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
