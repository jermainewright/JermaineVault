import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';
import { User } from '@jermainevault/shared';
import { env } from '../../config/env';
import { db } from '../../db/inMemory';

export class AuthService {
  async register(input: Omit<User, 'id'> & { password: string }): Promise<{ token: string; user: User }> {
    const passwordHash = await bcrypt.hash(input.password, 10);
    const user: User & { passwordHash: string } = {
      id: uuid(),
      email: input.email,
      fullName: input.fullName,
      role: input.role,
      teamId: input.teamId,
      passwordHash
    };

    db.users.push(user);

    const token = jwt.sign({ sub: user.id, teamId: user.teamId, role: user.role }, env.jwtSecret, {
      expiresIn: env.jwtExpiresIn
    });

    return { token, user };
  }
}
