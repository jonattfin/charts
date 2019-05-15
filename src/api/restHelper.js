import axios from 'axios';
const setConfig = (config = {}) => {
  const enhancedConfig = config;

  const cfg = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...enhancedConfig
  };


  return cfg;
};


class RestHelper {
  constructor(instance) {
    this.instance = instance;
  }

  async get(url, config = {}) {
    const response = await this.instance.get(url, setConfig(config));
    return response.data;
  }

  //   async put(url, params, config = {}) {
  //     await this.instance.put(url, params, setConfig(config));
  //   }

  //   async post(url, params, config = {}) {
  //     await this.instance.post(url, params, setConfig(config));
  //   }

  //   async patch(url, params, config = {}) {
  //     await this.instance.patch(url, params, setConfig(config));
  //   }

  //   async delete(url, params, config = {}) {
  //     await this.instance.delete(url, params, setConfig(config));
  //   }
}

function getInstance(type) {
  switch (type) {
    case 'backend': {
      const instance = axios.create({
        baseURL: getBaseUrl()
      });

      // See more about the Retry pattern: https://docs.microsoft.com/en-us/azure/architecture/patterns/retry
      //   axiosRetry(instance, 3);

      return instance;
    }
    default:
      throw new Error(`The instance of type ${type} is not supported!`);
  }
}

// const token = SessionHandler.getToken() || URLHelper.tryGetQueryParameter(Constants.QueryParam.ID_TOKEN);

// Here we set the Bearer
// axios.defaults.headers.common.Authorization = `bearer ${token}`;

function getBaseUrl() {
  // return 'https://express-api-19.herokuapp.com/api/v1/pulse';
  return 'http://localhost:8080/api/v1/pulse';
}

export default new RestHelper(getInstance('backend'));
