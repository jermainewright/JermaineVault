import { Router } from 'express';
import { getTeamSnapshots } from './teams.controller';

const router = Router();

router.get('/:teamId/snapshots', getTeamSnapshots);

export default router;
