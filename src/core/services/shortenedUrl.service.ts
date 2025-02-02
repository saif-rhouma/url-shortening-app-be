import { MSG_EXCEPTION } from '../constants/messages';
import NotFoundException from '../exceptions/notFound.exception';
import { IShortenedUrl } from '../models/shortenedUrl.model';
import shortenedUrlRepository from '../repositories/shortenedUrl.repository';

class ShortenedUrlService {
  private shortenedUrlRepository = shortenedUrlRepository;

  create(data: Partial<IShortenedUrl>) {
    return this.shortenedUrlRepository.create(data);
  }

  async findByCode(shortCode: string) {
    const result = await this.shortenedUrlRepository.findByCode(shortCode);
    if (!result) {
      throw new NotFoundException(MSG_EXCEPTION.NOT_FOUND_SHORTCODE);
    }
    return result;
  }

  findAll() {
    return this.shortenedUrlRepository.findAll();
  }

  async findForVisit(shortCode: string) {
    const result = await this.shortenedUrlRepository.updateVisit(shortCode);
    if (!result) {
      throw new NotFoundException(MSG_EXCEPTION.NOT_FOUND_SHORTCODE);
    }
    return result;
  }
}

export default new ShortenedUrlService();
