//require("newrelic");
const { parse } = require('url');
const next = require('next');
const express = require('express');
const siteRoutes = require("./src/routes/index.js");

const app = next({ dev: true });
const defaultRequestHandler = siteRoutes.getRequestHandler(app);

app.prepare().then(() => {
    const server = express();    
    const serverFunction = (req,res)=>{        
        const parsedUrl = parse(req.url, true);
        const {  method,url,hostname } = req;
        const { statusCode } = res;        
        const  data =`${hostname} ${method} ${url} ${statusCode}`;  
        defaultRequestHandler(req, res, parsedUrl);
    };
    server.get('*',serverFunction);
    server.listen(3001, (err) => {
            if (err) throw err;
            console.log('> Ready on http://localhost:3001');
    });
  
}).catch(err => {    
    logger.log('error',`${err}`);
});