/* eslint-disable @typescript-eslint/no-explicit-any */
import HTTP_CODE from '../constants/httpCode';
import BaseException from './baseException';

class NotFoundException extends BaseException {
  constructor(message, status = HTTP_CODE.NotFound, details?: any) {
    super(message, status, details);
  }
}
export default NotFoundException;
