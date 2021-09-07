let isEnv = "";

if (process.env.APP_ENV != undefined) {
  isEnv = process.env.APP_ENV;
} else if (process.env.NEW18_APP_ENV != undefined) {
  isEnv = process.env.NEW18_APP_ENV;
} else if (process.env.NW18_NEW18_APP_ENV != undefined) {
  isEnv = process.env.NW18_NEW18_APP_ENV;
}

let siteUrl = "http://localhost:3050/";
let apiUrl = "http://127.0.0.1:5050/nodeapi";
let nodeApiAjaxUrl = "http://127.0.0.1:5050/nodeapi";
let siteEnv = "stg";
// isEnv='beta'
switch (isEnv) {
  case "production":
    siteUrl = "https://hindi.news18.com/";
    apiUrl = "http://127.0.0.1:5050/nodeapi";
    nodeApiAjaxUrl = "https://hindi.news18.com/nodeapi";
    siteEnv = "";
    break;
  case "beta":
    siteUrl = "https://betahindi.news18.com/";
    apiUrl = "http://127.0.0.1:5050/nodeapi";
    nodeApiAjaxUrl = "https://betahindi.news18.com/nodeapi";
    siteEnv = "beta";
    break;
  case "stg":
    siteUrl = "https://stghindi.news18.com/";
    apiUrl = "http://127.0.0.1:5050/nodeapi";
    nodeApiAjaxUrl = "https://stghindi.news18.com/nodeapi";
    siteEnv = "stg";
    break;
  case "development":
    siteUrl = "http://localhost:3050/";
    apiUrl = "http://127.0.0.1:5050/nodeapi";
    nodeApiAjaxUrl = "http://127.0.0.1:5050/nodeapi";
    siteEnv = "stg";
    break;
  default:
    break;
}

const SITE_CONFIG = {
  IMG_STATIC_PATH_OLD: "http://static.hindi.news18.com/static-hindi/uploads/",
  IMG_STATIC_PATH: "https://images.hindi.news18.com/static-hindi/uploads/",
  IMG_STATIC_PATH_NEW: "https://images.hindi.news18.com/static-hindi/uploads/",
  REDIS_KEY_PREFIX: "KHABARN18-",
  redisPrefix: "KHABARN18-",
  redisCatPrefix: "KHABAR",
  apiUrl,
  siteUrl,
  nodeApiAjaxUrl,
  isEnv,
  mainUrl: "https://hindi.news18.com",
  THUMBNAIL_IMAGE_PLACEHOLDER_PATH: "https://images.news18.com/ibnkhabar/uploads/assests/images/placeholder.jpg",
  gceCode: "f0b7fff1dd9019261",
  imageBase: "images.news18.com/hindi/uploads/",
  siteEnv
};

module.exports = SITE_CONFIG;
