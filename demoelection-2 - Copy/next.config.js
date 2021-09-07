const SITE_CONFIG = require("./src/config/site.config.js")
module.exports = {
  reactStrictMode: true,
  useFileSystemPublicRoutes: false,
  publicRuntimeConfig: {
    ...SITE_CONFIG,
  },
}
