import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import { useState } from "react";


const LogIn = () => {
    const [inputs, setInputs]=useState({
        email:'',
        password:""
    })

    const {users, setLoggedInUser} = useContext(UserContext);
    const [wrongDetails,setWrongDetails] =useState(false)

    const navigation = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const loggedInUser = users.find(
            user=>user.email=== inputs.email &&
            user.password===inputs.password);
        if(loggedInUser){
            setLoggedInUser(loggedInUser);
            navigation("/")
        } else {
            return setWrongDetails(true)
        }
    }

    return ( 
    <>  
        <form onSubmit={handleSubmit} className="form">
        <h3>Log in</h3>
            <input 
                type="email" 
                name="email"
                value={inputs.email} 
                placeholder="email..."
                onChange={(e)=>setInputs({...inputs, email:e.target.value})}
            />
            <input 
                type="password"
                name="password"
                value={inputs.password} 
                placeholder="password..."
                onChange={(e)=>setInputs({...inputs, password:e.target.value})}
            />
            {
                wrongDetails && <span>Neteisingi prisijungimo duomenys</span>
            }
            <button type="submit">Log in</button>
        </form>
    </> 
    );
}
 
export default LogIn;