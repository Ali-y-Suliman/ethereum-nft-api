import alchemy from '../config/alchemy';
import { BAYC_ADDRESS, COOL_ADDRESS } from '../config/constants';
import { NFTOwner, OwnerBalance } from '../types';

export async function getCommonOwners(): Promise<NFTOwner[]> {
  const baycOwners = await alchemy.nft.getOwnersForContract(BAYC_ADDRESS);
  const coolOwners = await alchemy.nft.getOwnersForContract(COOL_ADDRESS);

  const commonOwners = baycOwners.owners.filter((owner) => coolOwners.owners.includes(owner));
  return commonOwners.map((owner) => ({ address: owner }));
}

export async function getOwnerBalance(address: string): Promise<OwnerBalance> {
  const balance = await alchemy.core.getBalance(address);
  return { address, balance: balance.toString() };
}
