import { UradService } from './serviceFactory';

export default class RealApi {
  static async fetchMeasures() {
    const config = {
      'X-User-id': 'www',
      'X-User-hash': 'global',
      'Origin': 'https://www.uradmonitor.com'
    };

    return UradService.get(`devices`, config);
  }
}
