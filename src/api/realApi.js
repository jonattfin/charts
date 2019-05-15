import RestHelper from './restHelper';

export default class RealApi {
  static async fetchMeasures() {
    return RestHelper.get(`measures`);
  }
}
