import { Document, Model } from 'mongoose';

class BaseRepository<T extends Document> {
  private model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(data: Partial<T>): Promise<T> {
    const document = new this.model(data);
    return document.save();
  }

  async findById(id: string): Promise<T | null> {
    return this.model.findById(id).exec();
  }

  async findAll(): Promise<T[]> {
    return this.model.find().exec();
  }

  async find(condition: object): Promise<T[]> {
    return this.model.find(condition).exec();
  }

  async findOne(condition: object): Promise<T | null> {
    return this.model.findOne(condition).exec();
  }

  async update(id: string, data: Partial<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async destroy(id: string): Promise<T | null> {
    return this.model.findByIdAndDelete(id).exec();
  }
}

export default BaseRepository;
