import * as bcrypt from 'bcrypt';

export class Encripter {
  async encrypt(password: string) {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }

  async compare(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
  }
}