import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

const Register = () => {
    const [formInputs, setFormInputs]=useState({
        email:'',
        password:'',
        confirmPassword:''
    })
    const navigation =useNavigate();

    const [invalidUsername, setInvalidUsername]=useState(false);

    const {users, addNewUser, setLoggedInUser} = useContext(UserContext);

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(users.find(user=>user.email===formInputs.email)){
            setInvalidUsername(true);
        }else{
            let newUser ={
                email:formInputs.email,
                password:formInputs.password,
                id: Date.now(),
            };
            addNewUser(newUser);
            setLoggedInUser(newUser);
            navigation('/');
        }
    }

    return ( 
    <>
        <form className="form" onSubmit={handleSubmit}>
            <h3>Register</h3>
            <input 
                type="email"
                name="email"
                value={formInputs.email}
                onChange={(e)=>setFormInputs({...formInputs,email:e.target.value})}
                placeholder="email..."
            />
            <input 
                type="text"
                name="password"
                value={formInputs.password}
                onChange={(e)=>setFormInputs({...formInputs,password:e.target.value})}
                placeholder="password..."
            />
            <input 
                type="text"
                name="confirmPassword"
                value={formInputs.confirmPassword}
                onChange={(e)=>setFormInputs({...formInputs,confirmPassword:e.target.value})}
                placeholder="confirmPassword..."
            />
            {
                invalidUsername && <span>User with this email already exists.</span>
            }
            <button type="submit">Register</button>
        </form>
    </> 
    );
}
 
export default Register;