


const Post = ({data}) => {

    return ( 
    <>
        {
        data?
         <div className="post">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </div> :
        "Postų nėra" 
        }
        
    </> 
    );
}
 
export default Post;