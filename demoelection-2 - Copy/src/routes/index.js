const routes = module.exports = require('next-routes')();

routes.add({ name: 'article', pattern: '/:cat/:subcat?/:slug(.*)-:post_id.htm', page: 'article' })

routes.add({ name: 'Home', pattern: '/', page: 'index' })
