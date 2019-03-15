const withCSS = require('@zeit/next-css');

module.exports = withCSS();

module.exports = {
  target: 'serverless'
};

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  }
};