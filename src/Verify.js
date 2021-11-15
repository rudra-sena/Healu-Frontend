import Home from './Home';
import{Link} from 'react-router-dom';


const Verify = () => {

let login;

//Verify login status
if(localStorage.getItem('login')){
    const store=JSON.parse(localStorage.getItem('login'));
    login=store.login
}
else{
    login=false;
}
    return ( 
        !login?
        <div className="verify">
        <h2>Login to enter this page</h2>        
        <Link  to="/">Click here to login</Link> 
        </div>

        :

        <div className="verify">
        <Home />
        </div>
     );
}
 
export default Verify;