import {Link, Outlet} from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { useContext } from 'react';


const Header = () => {
    const {loggedInUser}=useContext(UserContext);

    return ( 
    <>
            
            <div className='menu'>
                <img src="https://www.nicepng.com/png/full/83-835504_meditation-png.png" alt="logo" />
                {
                    loggedInUser ?
                    <div className='links'>
                        <Link to='/'>Home</Link>
                        <Link to='/add'>Add new Post</Link>
                    </div> :
                    <div className='links'>
                        <Link to='/login'>Log in</Link>
                        <Link to='/register'>Register</Link>
                    </div>
                }
            </div> 
        <Outlet />
    </> 
    );
}
 
export default Header;