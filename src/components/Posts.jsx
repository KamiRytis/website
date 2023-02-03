import Post from './Post';
import PostContext from '../contexts/PostContext';
import { useContext } from 'react';

const Posts = () => {
    const {posts} = useContext(PostContext);

    return ( 
    <>
        <h2 className='title'>Read our Articles and Share one of yours!🙏</h2>
        <div className='posts'>
        {
            posts?
            posts.map(post=>
                <Post 
                    data={post}
                    key={post.id}
                />
            ):
            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2Fd6cd5151c04765d1992edfde14483068%2Ftenor.gif%3Fitemid%3D5662595&f=1&nofb=1&ipt=f76ea317eaa45b39a579b7fff3f6c236052f1865f6805e7bdd668dd3be561804&ipo=images' alt='loading'/>
        }
        {
            posts.length===0 &&
            <p className='notFound'>No articles found..</p> 
        }
        </div>
    </> 
    );
}
 
export default Posts;