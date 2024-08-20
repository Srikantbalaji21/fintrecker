import request from 'supertest';
import app from '../index';
import User from '../models/User';

describe('Auth API', () => {
  it('should sign up a user', async () => {
    const res = await request(app)
      .post('/api/auth/signup')
      .send({
        email: 'test@example.com',
        password: '123456',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('token');
  });

  it('should login a user', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@example.com',
        password: '123456',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });
});
