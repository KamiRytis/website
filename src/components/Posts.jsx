import Post from './Post';
import PostContext from '../contexts/PostContext';
import { useContext } from 'react';

const Posts = () => {
    const {posts} = useContext(PostContext);

    return ( 
    <>
        <div className='posts'>
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
        </div>
    </> 
    );
}
 
export default Posts;