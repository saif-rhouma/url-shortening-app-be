import ShortenedUrlService from '../../../src/core/services/shortenedUrl.service';
import shortenedUrlRepository from '../../../src/core/repositories/shortenedUrl.repository';
import NotFoundException from '../../../src/core/exceptions/notFound.exception';
import { MSG_EXCEPTION } from '../../../src/core/constants/messages';

// Mocking the repository
jest.mock('../../../src/core/repositories/shortenedUrl.repository', () => ({
  create: jest.fn(),
  findByCode: jest.fn(),
  findAll: jest.fn(),
  updateVisit: jest.fn(),
}));

describe('ShortenedUrlService', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mock data before each test
  });

  describe('create', () => {
    it('should call the repository create method and return a result', async () => {
      const mockData = {
        originalUrl: 'https://github.com/saif-rhouma/',
        shortCode: 'abc1234567',
        qrCode: 'http://localhost:5001/qr/abc1234567',
      };
      const mockResponse = { ...mockData, id: 1 };

      (shortenedUrlRepository.create as jest.Mock).mockResolvedValue(mockResponse);

      const result = await ShortenedUrlService.create(mockData);

      expect(shortenedUrlRepository.create).toHaveBeenCalledWith(mockData);
      expect(result).toEqual(mockResponse);
    });
  });

  describe('findByCode', () => {
    it('should return the result if found', async () => {
      const shortCode = 'abc123';
      const mockResponse = { code: shortCode, url: 'http://example.com' };

      // Mock the repository findByCode method
      (shortenedUrlRepository.findByCode as jest.Mock).mockResolvedValue(mockResponse);

      const result = await ShortenedUrlService.findByCode(shortCode);

      expect(shortenedUrlRepository.findByCode).toHaveBeenCalledWith(shortCode);
      expect(result).toEqual(mockResponse);
    });

    it('should throw NotFoundException if not found', async () => {
      const shortCode = 'nonexistent';

      // Mock the repository findByCode method to return null
      (shortenedUrlRepository.findByCode as jest.Mock).mockResolvedValue(null);

      await expect(ShortenedUrlService.findByCode(shortCode)).rejects.toThrow(
        new NotFoundException(MSG_EXCEPTION.NOT_FOUND_SHORTCODE)
      );
    });
  });

  describe('findAll', () => {
    it('should return all shortened URLs', async () => {
      const mockResponse = [
        { code: 'abc123', url: 'http://example1.com' },
        { code: 'xyz456', url: 'http://example2.com' },
      ];

      // Mock the repository findAll method
      (shortenedUrlRepository.findAll as jest.Mock).mockResolvedValue(mockResponse);

      const result = await ShortenedUrlService.findAll();

      expect(shortenedUrlRepository.findAll).toHaveBeenCalled();
      expect(result).toEqual(mockResponse);
    });
  });

  describe('findForVisit', () => {
    it('should return the updated result if found', async () => {
      const shortCode = 'abc123';
      const mockResponse = { code: shortCode, url: 'http://example.com', visits: 1 };

      // Mock the repository updateVisit method
      (shortenedUrlRepository.updateVisit as jest.Mock).mockResolvedValue(mockResponse);

      const result = await ShortenedUrlService.findForVisit(shortCode);

      expect(shortenedUrlRepository.updateVisit).toHaveBeenCalledWith(shortCode);
      expect(result).toEqual(mockResponse);
    });

    it('should throw NotFoundException if not found', async () => {
      const shortCode = 'nonexistent';

      // Mock the repository updateVisit method to return null
      (shortenedUrlRepository.updateVisit as jest.Mock).mockResolvedValue(null);

      await expect(ShortenedUrlService.findForVisit(shortCode)).rejects.toThrow(
        new NotFoundException(MSG_EXCEPTION.NOT_FOUND_SHORTCODE)
      );
    });
  });
});
