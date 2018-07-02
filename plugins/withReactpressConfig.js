const reactpressConfig = require("../reactpress.config");

module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    publicRuntimeConfig: {
      // our config for reactpress
      ...nextConfig.publicRuntimeConfig,
      ...reactpressConfig
    }
  });
};
