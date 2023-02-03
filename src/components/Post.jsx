



const Post = ({data}) => {



    return ( 
    <>
        <div className="post">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </div>
    </> 
    );
}
 
export default Post;