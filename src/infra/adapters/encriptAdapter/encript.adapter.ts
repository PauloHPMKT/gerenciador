export interface EncriptAdapter {
  encrypt(value: string): Promise<string>;
  compare(value: string, hash: string): Promise<boolean>;
}
