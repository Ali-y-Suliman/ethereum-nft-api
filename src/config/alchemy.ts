import { Network, Alchemy } from 'alchemy-sdk';
import { ALCHEMY_API_KEY } from './constants';

const settings = {
  apiKey: ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

export default alchemy;
