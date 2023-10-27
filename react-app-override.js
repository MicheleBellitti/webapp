const path = require('path');

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback, // This ensures any other fallbacks are not overwritten
    fs: false,
    crypto: false,
    os: false 
  };
  return config;
};
