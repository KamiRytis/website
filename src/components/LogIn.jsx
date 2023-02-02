import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import { useState } from "react";


const LogIn = () => {
    const [inputs, setInputs]=useState({
        userName:'',
        password:""
    })

    const {users, setLoggedInUser} = useContext(UserContext);

    const navigation = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const loggedInUser = users.find(
            user=>user.userName=== inputs.userName &&
            user.password===inputs.password);
        if(loggedInUser){
            setLoggedInUser(loggedInUser);
            navigation("/")
        } else {
            return "Neteisingi prisijungimo duomenys"
        }
    }

    return ( 
    <>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="userName"
                value={inputs.userName} 
                placeholder="username..."
                onChange={(e)=>setInputs({...inputs, userName:e.target.value})}
            />
            <input 
                type="password"
                name="password"
                value={inputs.password} 
                placeholder="password..."
                onChange={(e)=>setInputs({...inputs, password:e.target.value})}
            />
            <button type="submit">Log in</button>
        </form>
    </> 
    );
}
 
export default LogIn;