import {Link, Outlet} from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { useContext } from 'react';


const Header = () => {
    const {loggedInUser}=useContext(UserContext);

    return ( 
    <>
            
            <div className='menu'>
                <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_573407.png&f=1&nofb=1&ipt=0797786da5e051c22fb1ac1fe6caf0e6cefcb1c417b41b2c0264320419c1ebbc&ipo=images" alt="logo" />
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