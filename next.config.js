/**
 * Config file for next.js
 */
const reactpressConfig = require("./reactpress.config");

module.exports = {
  /* config options here */
  publicRuntimeConfig: {
    // our config for reactpress
    ...reactpressConfig
  }
};
