import { Router } from 'express';
import appRoute from './app.route';

const router = Router();

router.use('/hello', appRoute);

export default router;
