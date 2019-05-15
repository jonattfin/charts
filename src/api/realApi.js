import { UradService } from './serviceFactory';

export default class RealApi {
  static async fetchMeasures() {
    return UradService.get(`devices`);
  }
}
