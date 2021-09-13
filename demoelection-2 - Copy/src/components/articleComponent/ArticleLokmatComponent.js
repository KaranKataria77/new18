import Table from "../Table"
import PostContent from "../PostContent";

const ArticleHindiComponent = (props) => {

    let { headline, body } = props.data.data[0];
    

  return (
    <div className="container">
    <h1 className="article_title">{headline || ""}</h1>
    <PostContent post_content={body || ""} />
    <Table title={"News 18 Marathi Table"}/>
    <style>{`
    .container{
        margin: 0 100px 40px;
        
    }
    `}</style>
</div>
    );
};
export default ArticleHindiComponent;
