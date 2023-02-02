import Post from './Post';
import PostContext from '../contexts/PostContext';
import { useContext } from 'react';

const Posts = () => {
    const {posts} = useContext(PostContext);

    return ( 
    <>
        {
            posts?
            posts.map(post=>
                <Post 
                    data={post}
                    key={post.id}
                />
            ):
            "Informacija kraunama"
        }
    </> 
    );
}
 
export default Posts;