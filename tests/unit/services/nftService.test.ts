import { getCommonOwners, getOwnerBalance } from '../../../src/services/nftService';
import alchemy from '../../../src/config/alchemy';

jest.mock('../../../src/config/alchemy', () => ({
  nft: {
    getOwnersForContract: jest.fn(),
  },
  core: {
    getBalance: jest.fn(),
  },
}));

describe('NFT Service', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('getCommonOwners', () => {
    it('returns correct common owners', async () => {
      const mockBAYCOwners = { owners: ['0x1', '0x2', '0x3'] };
      const mockCOOLOwners = { owners: ['0x2', '0x3', '0x4'] };

      (alchemy.nft.getOwnersForContract as jest.Mock)
        .mockResolvedValueOnce(mockBAYCOwners)
        .mockResolvedValueOnce(mockCOOLOwners);

      const result = await getCommonOwners();

      expect(result).toEqual([{ address: '0x2' }, { address: '0x3' }]);
    });
  });

  describe('getOwnerBalance', () => {
    it('returns correct balance', async () => {
      const mockAddress = '0x123';
      const mockBalance = '1000000000000000000';

      (alchemy.core.getBalance as jest.Mock).mockResolvedValue(mockBalance);

      const result = await getOwnerBalance(mockAddress);

      expect(result).toEqual({ address: mockAddress, balance: mockBalance });
    });
  });
});