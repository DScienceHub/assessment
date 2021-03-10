const yaml = require('js-yaml');
const { logger } = require('../common');

const baseUrl = process.env.REACT_APP_BASE_BUCKET_URL;

class ModelClient {
  constructor() {
    this.windowsYamlObject = 'latest.yml';
    this.linuxYamlObject = 'latest-linux.yml';
    this.macYamlObject = 'latest-mac.yml';
  }

  getSystemDetails() {
    const appVersion = navigator.appVersion;
    if (appVersion.includes('Macintosh')) {
      return 'macOS';
    } else if (appVersion.includes('Windows')) {
      return 'windows';
    } else if (appVersion.includes('Linux')) {
      return 'linux';
    }
  }

  async getLatestVersion(url) {
    const response = await fetch(url);
    if (response.ok) {
      logger.info(`Received response OK for yaml fetch`);
      try {
        const doc = await yaml.load(await response.text());
        return {
          url: baseUrl + doc.files[0].url.replace(/\s/g, '+'),
          version: doc.version,
          date: doc.releaseDate.split('T')[0],
        };
      } catch (e) {
        logger.warn(`Error getting the download file name ${e}`);
      }
    } else {
      logger.warn(`Received BAD response for yaml fetch ${response}`);
      return {
        url: '',
        version: '',
        date: '',
      };
    }
  }

  async getLatestWindowsVersion() {
    return await this.getLatestVersion(baseUrl + this.windowsYamlObject);
  }

  async getLatestMacVersion() {
    return await this.getLatestVersion(baseUrl + this.macYamlObject);
  }

  async getLatestLinuxVersion() {
    return await this.getLatestVersion(baseUrl + this.linuxYamlObject);
  }
}

const modelClient = new ModelClient();

export default modelClient;
