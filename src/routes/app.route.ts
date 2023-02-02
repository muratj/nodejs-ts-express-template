import { Router } from 'express';
import { greet } from '../controllers/app.controller';

const router = Router();

router.get('/', greet);
router.get('/:name', greet);

export default router;
