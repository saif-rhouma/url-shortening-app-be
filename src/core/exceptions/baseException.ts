/* eslint-disable @typescript-eslint/no-explicit-any */
class BaseException extends Error {
  status: number;
  details?: any;
  constructor(message, status = 500, details?: any) {
    super(message);
    this.status = status;
    this.details = details;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }

  toJSON() {
    return {
      message: this.message,
      status: this.status,
      ...(this.details && { details: this.details }),
    };
  }
}

export default BaseException;
