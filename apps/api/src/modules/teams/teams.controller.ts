import { Request, Response } from 'express';
import { TeamsService } from './teams.service';

const teamsService = new TeamsService();

export const getTeamSnapshots = (req: Request, res: Response): void => {
  const { teamId } = req.params;
  res.json({ data: teamsService.getTeamSnapshots(teamId) });
};
