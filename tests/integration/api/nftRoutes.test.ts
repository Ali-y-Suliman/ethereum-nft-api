import request from 'supertest';
import app from '../../../src/app';

describe('NFT Routes', () => {
  it('GET /api/common-owners should return a list of common owners', async () => {
    const response = await request(app).get('/api/nft/common-owners');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'ok');
    expect(response.body).toHaveProperty('data');
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it('GET /api/owner-balance/:address should return the balance for a valid address', async () => {
    const validAddress = (await request(app).get('/api/nft/common-owners')).body.data[0].address;
    const response = await request(app).get(`/api/nft/owner-balance/${validAddress}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'ok');
    expect(response.body).toHaveProperty('balance');
  });

  it('GET /api/owner-balance/:address should return 400 for an invalid address', async () => {
    const invalidAddress = 'not-a-valid-address';
    const response = await request(app).get(`/api/nft/owner-balance/${invalidAddress}`);
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('status', 'error');
  });
});