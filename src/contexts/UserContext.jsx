import { useState, useEffect } from "react";
import { createContext } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [users,setUsers] =useState([])
    const [loggedInUser, setLoggedInUser] =useState();

    const getUsers = async () => {
        const usersFetched = await fetch("http://localhost:3000/users").then(res=>res.json());
        setUsers(usersFetched);
    }
    useEffect(()=>{
        getUsers()
    },[])

    return ( 
    <>
        <UserContext.Provider
            value={{
                users,
                loggedInUser,
                setLoggedInUser
            }}
        >
            {children}
        </UserContext.Provider>
    </> 
    );
}

export {UserProvider}
export default UserContext;