import Table from "../Table";
import PostContent from "../PostContent";
import Test from "widgets/Test/Test";

const ArticleEnglishComponent = (props) => {
  let { headline, body } = props.data;

  console.log("props ", props)

  if (props.news_type == "hi") {
    headline = props.data.data[0].title;
    body = props.data.data[0].full_body;
  } else if (props.news_type == "lk") {
    headline = props.data.data[0].headline;
    body = props.data.data[0].body;
  }

  try {
    return (
      <div className="container">
        <Test />
        <h1 className="article_title">{headline || ""}</h1>
        <PostContent post_content={body || ""} />
        <Table title={"News 18 Table"} />
        <style jsx>{`
          .container {
            margin: 0 100px 40px;
          }
        `}</style>
      </div>
    );
  } catch (e) {
      //console.log('Error(ArticleEnglishComponent.js)::',e);
    return null;
  }
};
export default ArticleEnglishComponent;
