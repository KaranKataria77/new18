//import axios from "axios";
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { baseUrl } from "@/config/index";
import { getBreadCrumbSchemaJson } from "@/config/schemaData";
import ArticleEnglishComponent from "@/components/articleComponent/ArticleEnglishComponent";
import fetchUtility from "@/includes/fetchUtility";
import { getLayoutProps, withLayout } from '@/layouts/layoutHelper';
import GlobalContext from 'context';
// import ArticleHindiComponent from "../src/components/articleComponent/ArticleHindiComponent";
// import ArticleLokmatComponent from "../src/components/articleComponent/ArticleLokmatComponent";

const Article = ({data, news_type}) => {
    //let { headline } = data;
    let { home }=useContext(GlobalContext)
    const router = useRouter();
    let breadCrumbSchema = getBreadCrumbSchemaJson(router, baseUrl, "article", home.headline);

    return (
        <>
            <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(breadCrumbSchema),
            }}
            />
            <ArticleEnglishComponent data={home} news_type={news_type} />
            {/* {news_type == "hi" ? <ArticleHindiComponent data={data} /> : null}
            {news_type == "lk" ? <ArticleLokmatComponent data={data} /> : null}
            {news_type != "hi" && news_type != "lk" ? <ArticleEnglishComponent data={data} /> : null} */}
        </>
    )
}
export default withLayout(Article,"Article_Page");
export async function getServerSideProps(context) {
    let post_id = context.query.post_id;
    let news_type = context.query.subcat ? context.query.subcat : "";
    let props = {news_type: news_type,post_id:post_id}
    let layoutData = await Promise.all([ getLayoutProps(props) ]);
    //let result = await axios.get(`https://www.moneycontrol.com/newsapi/get_post/article/${post_id}/`);

    // if(news_type == "hi"){
    //     result = await axios.get(`https://hindi.news18.com/nodeapi/solr?id=${post_id}`);
    //     //result = await axios.get(`https://hindi.moneycontrol.com/newsapi/get_post/article/${post_id}/`);
    // }
    // else if(news_type == "lk"){
    //     result = await axios.get(`https://lokmat.news18.com/nodeapi/solr?id=${post_id}`);
    //     //result = await axios.get(`https://lokmat.moneycontrol.com/newsapi/get_post/article/${post_id}/`);
    // }

    // let url = `https://www.moneycontrol.com/newsapi/get_post/article/${post_id}/`;
    
    // if(news_type == "hi"){
    //     url = `https://hindi.news18.com/nodeapi/solr?id=${post_id}`;
    // }
    // else if(news_type == "lk"){
    //     url = `https://lokmat.news18.com/nodeapi/solr?id=${post_id}`;
    // }

    // let result = await fetchUtility(url,[]);
    
    return {
      props: {
        data: [],
        news_type: news_type,
        post_id: post_id,
        layoutData: layoutData[0]
      }
    };
  }