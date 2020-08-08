import { hash, compare } from 'bcryptjs';
import IHashProvider from '../models/IHashProvider';

class BCryptHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    const passwordHashed = await hash(payload, 8);

    return passwordHashed;
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    const passwordMatched = await compare(payload, hashed);

    return passwordMatched;
  }
}

export default BCryptHashProvider;
