import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div>
        <h1>404 Error!</h1><br/><br/>
        <b>Oooops! The page you are looking for was not found.</b>
        <br/><br/>

        <Link to='/'>Go back to Home Page</Link>
        </div>
     );
}
 
export default NotFound;