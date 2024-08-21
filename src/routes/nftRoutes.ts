import express from 'express';
import * as nftController from '../controllers/nftController';

const router = express.Router();

router.get('/common-owners', nftController.getCommonOwners);
router.get('/owner-balance/:address', nftController.getOwnerBalance);

export default router;
