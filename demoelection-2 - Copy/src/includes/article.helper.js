import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
import axios from 'axios';
   
async function fetch_data(query = null, start = 0, limit = 0, sortorder = null,sortby = null, facet = null, fq = null, fl = null, wt = null) {
    console.log("nodeApiAjaxUrl=> ",publicRuntimeConfig.nodeApiAjaxUrl);
    let result = await axios.get(publicRuntimeConfig.nodeApiAjaxUrl+"/get-solr_data-by-query", {'params': {
        query: query,
        start: start,
        limit: limit,
        sortorder: sortorder,
        sortby: sortby
    }});

    return result.data;

}

export { fetch_data }