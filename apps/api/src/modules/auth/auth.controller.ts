import { Request, Response } from 'express';
import { AuthService } from './auth.service';

const authService = new AuthService();

export const register = async (req: Request, res: Response): Promise<void> => {
  const { email, fullName, role, teamId, password } = req.body;
  const result = await authService.register({ email, fullName, role, teamId, password });
  res.status(201).json(result);
};
