
import { HerokuService } from './serviceFactory';

export default class Api {
  static async fetchMeasures() {
    const response = await HerokuService.get('/measures/data1day');
    return response.measures;
  }
}
