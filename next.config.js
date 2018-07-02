const withCSS = require("@zeit/next-css");
/**
 * Config file for next.js
 */
let reactpressConfig = require("./reactpress.config");

module.exports = withCSS({
  publicRuntimeConfig: {
    // our config for reactpress
    ...reactpressConfig
  }
});
