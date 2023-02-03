import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import Posts from './Posts';

const Home = () => {

    const {loggedInUser}=useContext(UserContext);

    return ( 
    <>  
        {
            loggedInUser?
            <Posts /> :
            <h2 className='title1'>Hello, busy human!</h2>
        }
    </> 
    );
}
 
export default Home;