import { useState} from 'react';
import Login from './Login';
import {connect} from 'react-redux';

const Home = (props) => {

    const[click,setClick]=useState(false);

    //Logout handler
    const handleClick=() => {   
        localStorage.clear();
        setClick(true);

        //Clearing data in redux store
        props.clearStore();
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

//Map the dispatch function to component props
const mapDispatchToProps = (dispatch)=>{
    return{
    clearStore: () =>{dispatch({type:'CLEAR_STORE'})}
    }
}

export default connect(mapDispatchToProps)(Home)