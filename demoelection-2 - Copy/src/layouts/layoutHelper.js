import Layout from "./index";
import GlobalContext from "context";
import fetchUtility from "@/includes/fetchUtility";
const withLayout =(Component, from = "default_page" ) =>
  (props) => {
    const { home } = props.layoutData || {};
    let news_type = props.news_type != undefined ? props.news_type : ""; 
    return (
      <GlobalContext.Provider
        value={{ home, news_type }}
      >
        <Layout home={home} from={from}>
          <Component {...props} />
        </Layout>
      </GlobalContext.Provider>
    );
  };

const getLayoutProps = async (props) => {
  try {
   let news_type = props.news_type && props.news_type;
   let post_id = props.post_id && props.post_id;
   let url = `https://www.moneycontrol.com/newsapi/get_post/article/${post_id}/`;
    
   if(news_type == "hi"){
       url = `https://hindi.news18.com/nodeapi/solr?id=${post_id}`;
   }
   else if(news_type == "lk"){
       url = `https://lokmat.news18.com/nodeapi/solr?id=${post_id}`;
   }

   let result = await fetchUtility(url,[]);
    return {
      home: result,
    };
  } catch (e) {
    //console.log("Caught some error")
    console.log(e);
    return {
      props: {},
    };
  }
};

export { getLayoutProps, withLayout };
