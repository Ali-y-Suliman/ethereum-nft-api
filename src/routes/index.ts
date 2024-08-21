import { Router } from 'express';
import nftRoutes from './nftRoutes';

const router = Router();

router.use('/nft', nftRoutes);

export default router;
