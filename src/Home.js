import { useState} from 'react';
import Login from './Login';

const Home = () => {

    const[click,setClick]=useState(false);

    //Logout handler
    const handleClick=() => {   
        localStorage.clear();
        setClick(true);
}
    
    return ( 
        !click?
        <div className="home">
        <h1>Home Page</h1>
        <button className="btn" onClick={handleClick}>LOGOUT</button>
        </div>
        :
        <Login/>


     );
}
 
export default Home;