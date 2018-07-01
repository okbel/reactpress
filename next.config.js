/**
 * Config file for next.js
 */
import reactpressConfig from "./reactpress.config";
module.exports = {
  /* config options here */
  publicRuntimeConfig: {
    // our config for reactpress
    ...reactpressConfig
  }
};
