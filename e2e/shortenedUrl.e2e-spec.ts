import { Express } from 'express';
import request from 'supertest';
import App from '../src/app';
import Database from '../src/database';
import HTTP_CODE from '../src/core/constants/httpCode';

describe('ShortenedUrlController E2E Tests', () => {
  let server: App;
  let app: Express;
  let shortCode: string;
  let createdUrl;

  beforeAll(async () => {
    await Database.connect();
    server = new App();
    server.start();
    app = server.getApp();

    // Setup: create a shortened URL before tests
    const response = await request(app).post('/api/').send({ url: 'http://example.com' });

    shortCode = response.body.shortCode;
    createdUrl = response.body;
  });

  afterAll(async () => {
    await Database.close();
    await server.close();
  });

  describe('POST /api/', () => {
    it('should create a shortened URL and return it', async () => {
      const response = await request(app).post('/api/').send({ url: 'http://example.com' });

      expect(response.status).toBe(HTTP_CODE.Created);
      expect(response.body).toHaveProperty('shortCode');
      expect(response.body).toHaveProperty('originalUrl');
      expect(response.body).toHaveProperty('qrCode');
    });
  });

  describe('GET /api/:shortCode', () => {
    it('should return the URL details if found', async () => {
      const response = await request(app).get(`/api/${shortCode}`);

      expect(response.status).toBe(HTTP_CODE.Ok);
      expect(response.body).toEqual(createdUrl);
    });

    it('should return a 404 if the URL is not found', async () => {
      const response = await request(app).get('/api/1234567890');

      expect(response.status).toBe(HTTP_CODE.NotFound);
      expect(response.body).toHaveProperty('errorCode');
    });
  });

  describe('GET /', () => {
    it('should return all shortened URLs', async () => {
      const response = await request(app).get('/api/');

      expect(response.status).toBe(HTTP_CODE.Ok);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('GET /qr/:shortCode', () => {
    it('should return the QR code image if it exists', async () => {
      const response = await request(app).get(`/api/qr/${shortCode}`);

      expect(response.status).toBe(HTTP_CODE.Ok);
      expect(response.header['content-type']).toBe('image/png');
    });

    it('should return 404 if the QR code image does not exist', async () => {
      const response = await request(app).get(`/api/qr/1234567890`);

      expect(response.status).toBe(HTTP_CODE.NotFound);
      expect(response.body).toHaveProperty('errorCode');
    });
  });

  describe('GET /api/visit/:shortCode', () => {
    it('should return the shortened URL data after visit', async () => {
      const response = await request(app).get(`/api/visit/${shortCode}`);

      expect(response.status).toBe(HTTP_CODE.Ok);
      expect(response.body).toHaveProperty('visits');
      expect(response.body.visits).toBeGreaterThan(0);
    });

    it('should return 404 if the short code is not found on visit', async () => {
      const response = await request(app).get('/api/visit/1234567890');

      expect(response.status).toBe(HTTP_CODE.NotFound);
      expect(response.body).toHaveProperty('errorCode');
    });
  });
});
