const PostContent = (props) => {

    var contentBlocks = props.post_content.split("\r\n").map(content => ({
        type: "content",
        __html: content,
    }));

    try{
    return(
        <div className="content_wrapper arti-flow">
            {contentBlocks.map(({ type, ...content }) => {
                return(<p dangerouslySetInnerHTML={content}>
            </p>)
            })
        }
        <style>{`
        .content_wrapper {
            font-size: 18px;
            line-height: 28px;
            font: 400 20px/32px 'Lora', sans-serif;
            color: #000000;
            position: relative;
        }

        .arti-flow a, .article_box a {
            font-family: 'Lora', sans-serif;
            color: #000;
            font-weight: 600;
            text-decoration: underline;
        }`}</style>
        </div>
    );
    }
    catch (e) {
        //console.log('Error(PostContent.js)::',e);
        return null;
    }
}

export default PostContent