import { UradService } from './serviceFactory';

export default class RealApi {
  static fetchMeasures() {
    return UradService.get(`devices`);
  }
}
