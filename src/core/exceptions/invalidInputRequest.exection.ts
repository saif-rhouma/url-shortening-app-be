import HTTP_CODE from '../constants/httpCode';
import { MSG_EXCEPTION } from '../constants/messages';
import BaseException from './baseException';

class InvalidInputRequestException extends BaseException {
  constructor(details) {
    super(MSG_EXCEPTION.INVALID_INPUT, HTTP_CODE.BadRequest, details);
  }
}
export default InvalidInputRequestException;
