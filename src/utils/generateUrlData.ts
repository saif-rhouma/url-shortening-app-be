import { createWriteStream } from 'fs';
import qr from 'qr-image';
import { nanoid } from 'nanoid';
import { FILE_TYPE, HOST_NAME, QR_FILES_PATH } from '../configs/qrConfig';

function generatedUrlData(url: string) {
  const shortCode = nanoid(10);
  const shortUrlData = {
    originalUrl: url,
    shortCode,
    qrCode: `${HOST_NAME}/qr/${shortCode}`,
  };

  const qrImage = qr.image(url, { type: FILE_TYPE });
  qrImage.pipe(createWriteStream(`${QR_FILES_PATH}/${shortCode}.${FILE_TYPE}`));
  return shortUrlData;
}

export default generatedUrlData;
