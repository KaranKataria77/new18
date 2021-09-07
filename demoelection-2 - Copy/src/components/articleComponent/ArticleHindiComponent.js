import Table from "../Table"
import PostContent from "../PostContent";

const ArticleHindiComponent = (props) => {

    let { title, full_body } = props.data.data[0];
    

  return (
    <div className="container">
    <h1 className="article_title">{title || ""}</h1>
    <PostContent post_content={full_body || ""} />
    <Table title={"News 18 Hindi Table"}/>
    <style>{`
    .container{
        margin: 0 100px 40px;
        
    }
    `}</style>
</div>
    );
};
export default ArticleHindiComponent;
