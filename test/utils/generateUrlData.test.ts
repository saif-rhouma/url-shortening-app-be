import qr from 'qr-image';
import { createWriteStream } from 'fs';
import generatedUrlData from '../../src/utils/generateUrlData';

// Mock the dependencies
jest.mock('nanoid', () => ({
  nanoid: jest.fn(() => 'abc1234567'), // Mock the return value of nanoid
}));

jest.mock('qr-image', () => ({
  image: jest.fn(() => ({
    pipe: jest.fn(),
  })),
}));

jest.mock('fs', () => ({
  createWriteStream: jest.fn(() => ({
    write: jest.fn(),
    end: jest.fn(),
  })),
}));

jest.mock('../../src/configs/qrConfig', () => ({
  FILE_TYPE: 'png',
  HOST_NAME: 'http://localhost:5001',
  QR_FILES_PATH: '../../src/public',
}));

describe('generatedUrlData', () => {
  it('should generate a shortened URL data with qrCode', () => {
    const url = 'https://github.com/saif-rhouma/';

    const result = generatedUrlData(url);

    expect(result).toEqual({
      originalUrl: url,
      shortCode: 'abc1234567',
      qrCode: 'http://localhost:5001/qr/abc1234567',
    });

    expect(qr.image).toHaveBeenCalledWith(url, { type: 'png' });

    // Test if createWriteStream was called with the expected file path
    expect(createWriteStream).toHaveBeenCalledWith('../../src/public/abc1234567.png');
  });
});
