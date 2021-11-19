import Home from './Home';
import{Link} from 'react-router-dom';
import {connect} from 'react-redux';


const Verify = (props) => {


    return ( 
        
        //Verify Login
        !props.login?
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

//Map the store to component props
const mapStateToProps=(state)=>{
  return{
  login: state.login
  }

}

 
export default connect(mapStateToProps)(Verify)