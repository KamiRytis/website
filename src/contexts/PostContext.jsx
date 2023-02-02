import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const PostContext = createContext();

const PostProvider = ({children}) => {
    const [posts,setPosts]=useState([])

    const getPosts = async () => {
        const fetchinamiPostai =await fetch("http://localhost:3000/posts")
        .then(res=>res.json());
        setPosts(fetchinamiPostai);
    }
    useEffect(()=>{
        getPosts();
    },[])

    const addNewPost =(newPost)=>{
        fetch("http://localhost:3000/posts",{
            method: "POST",
            headers:{
                'Content-type': 'application/json; charset =UTF-8'
            },
            body:JSON.stringify(newPost)
        })
        setPosts([...posts,newPost])
    }


    return ( 
    <>
        <PostContext.Provider
            value={{
                posts,
                addNewPost
            }}
        >
            {children}
        </PostContext.Provider>
    </> 
    );
}

export {PostProvider}
export default PostContext;