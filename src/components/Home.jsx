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
            ""
        }
    </> 
    );
}
 
export default Home;