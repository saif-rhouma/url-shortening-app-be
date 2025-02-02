import { Request, Response } from 'express';
import AsyncRouteHandler from 'src/types/AsyncRouteHandler';
import HTTP_CODE from '../constants/httpCode';
import shortenedUrlService from '../services/shortenedUrl.service';
import generatedUrlData from '../../utils/generateUrlData';
import { FILE_TYPE, QR_FILES_PATH } from '../../configs/qrConfig';
import { access } from 'fs/promises';
import NotFoundException from '../exceptions/notFound.exception';
import { MSG_EXCEPTION } from '../constants/messages';

class ShortenedUrlController {
  createShortUrl: AsyncRouteHandler = async (req: Request, res: Response) => {
    const { url } = req.body;
    const shortUrlData = await generatedUrlData(url);
    const shortUrl = await shortenedUrlService.create(shortUrlData);
    res.status(HTTP_CODE.Created).json(shortUrl);
  };

  getUrlDetails: AsyncRouteHandler = async (req: Request, res: Response) => {
    const { shortCode } = req.params;
    const shortUrl = await shortenedUrlService.findByCode(shortCode);
    res.status(HTTP_CODE.Ok).json(shortUrl);
  };

  getAllUrl: AsyncRouteHandler = async (_req: Request, res: Response) => {
    const shortUrls = await shortenedUrlService.findAll();
    res.status(HTTP_CODE.Ok).json(shortUrls);
  };

  getQrImage: AsyncRouteHandler = async (req: Request, res: Response) => {
    const { shortCode } = req.params;
    const imagePath = `${QR_FILES_PATH}/${shortCode}.${FILE_TYPE}`;
    try {
      await access(imagePath);
      res.status(HTTP_CODE.Ok).sendFile(imagePath);
    } catch (err) {
      throw new NotFoundException(MSG_EXCEPTION.NOT_FOUND_QR_CODE_FILE_IMAGE, HTTP_CODE.NotFound, err);
    }
  };
  visit: AsyncRouteHandler = async (req: Request, res: Response) => {
    const { shortCode } = req.params;
    const shortUrl = await shortenedUrlService.findForVisit(shortCode);
    res.status(HTTP_CODE.Ok).json(shortUrl);
  };
}

export default new ShortenedUrlController();
