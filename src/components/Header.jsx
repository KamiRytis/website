import {Link, Outlet} from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { useContext } from 'react';


const Header = () => {
    const {loggedInUser}=useContext(UserContext);

    return ( 
    <>
        {
            loggedInUser ?
            <div className='menu'>
                <img src="" alt="logo" />
                <Link to='/'>Home</Link>
                <Link to='/add'>Add new Post</Link>
             </div>
            :
            <div className='menu'>
                <img src="" alt="logo" />
                <Link to='/login'>Log in</Link>
                <Link to='/register'>Register</Link>
            </div>
        }    
        <Outlet />
    </> 
    );
}
 
export default Header;