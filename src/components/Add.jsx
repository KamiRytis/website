import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostContext from "../contexts/PostContext";

const Add = () => {
    const [formInputs,setFormInputs]=useState({
        title:"",
        description:""
    })

    const navigation =useNavigate();

    const {addNewPost}=useContext(PostContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        let newPost= {
            ...formInputs,
            id: Date.now(),
        };
        addNewPost(newPost);
        navigation("/");
    }

    return ( 
    <>
    <form onSubmit={handleSubmit}>
        <label>
            Title:
            <input 
                type="text" 
                name="title"
                value={formInputs.title}
                onChange={(e)=>setFormInputs({...formInputs,title:e.target.value})}
            />
        </label>
        <label>
            Description:
            <textarea 
                name="description" 
                value={formInputs.description} 
                cols="auto" 
                rows="auto"
                onChange={(e)=>setFormInputs({...formInputs,description:e.target.value})}
            >
        </textarea>
        </label>
        <button type="submit">Post it!</button>
    </form>
    </> 
    );
}
 
export default Add;