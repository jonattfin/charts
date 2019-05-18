
import { HerokuService } from './serviceFactory';

export default class Api {
  static async getLastDay() {
    const response = await HerokuService.get('/measures/last-day');
    return response.measures;
  }

  static async getLastWeek() {
    const response = await HerokuService.get('/measures/last-week');
    return response.measures;
  }
}
