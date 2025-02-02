import ShortenedUrl, { IShortenedUrl } from '../models/shortenedUrl.model';
import BaseRepository from './baseRepository';

class ShortenedUrlRepository extends BaseRepository<IShortenedUrl> {
  constructor() {
    super(ShortenedUrl);
  }

  async findByCode(shortCode: string) {
    return this.findOne({ shortCode });
  }

  async updateVisit(shortCode: string) {
    return ShortenedUrl.findOneAndUpdate({ shortCode, isActive: true }, { $inc: { visits: 1 } }, { new: true });
  }
}

export default new ShortenedUrlRepository();
