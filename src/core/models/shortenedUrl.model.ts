import { Schema, model, Document } from 'mongoose';

export interface IShortenedUrl extends Document {
  originalUrl: string;
  shortCode: string;
  expiresAt?: Date;
  visits: number;
  isActive: boolean;
  qrCode?: string;
}

const shortenedUrlSchema: Schema = new Schema(
  {
    originalUrl: {
      type: String,
      required: true,
      trim: true,
    },
    shortCode: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    expiresAt: {
      type: Date,
      required: false,
    },
    visits: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    qrCode: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Unique constraint only when isActive is true
shortenedUrlSchema.index({ shortCode: 1, isActive: 1 }, { unique: true, partialFilterExpression: { isActive: true } });

const ShortenedUrl = model<IShortenedUrl>('ShortenedUrl', shortenedUrlSchema);

export default ShortenedUrl;
