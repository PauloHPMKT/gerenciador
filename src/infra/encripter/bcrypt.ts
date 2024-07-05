import * as bcrypt from 'bcrypt';

export class Encripter {
  async encrypt(password: string) {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }
}