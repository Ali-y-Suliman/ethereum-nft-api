import { Request, Response, NextFunction } from 'express';
import * as nftService from '../services/nftService';

export async function getCommonOwners(req: Request, res: Response, next: NextFunction) {
  try {
    const commonOwners = await nftService.getCommonOwners();
    res.json({ status: 'ok', data: commonOwners });
  } catch (error) {
    next(error);
  }
}

export async function getOwnerBalance(req: Request, res: Response, next: NextFunction) {
  try {
    const { address } = req.params;
    const commonOwners = await nftService.getCommonOwners();

    if (!commonOwners.some((owner) => owner.address === address)) {
      return res.status(400).json({ status: 'error', message: 'Address does not own both tokens' });
    }

    const balance = await nftService.getOwnerBalance(address);
    res.json({ status: 'ok', balance: balance.balance });
  } catch (error) {
    next(error);
  }
}
