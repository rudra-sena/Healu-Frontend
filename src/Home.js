import {connect} from 'react-redux';
import { useHistory } from 'react-router';
const Home = (props) => {

    const history = useHistory();
    //Logout handler
    const handleClick=() => { 
        props.clearStore({login: false});
        history.push('/')
}
if(!props.login){
    history.push('/')
}
    return ( 
        
        <div className="home">
        <h1>Home Page</h1>
        <button className="btn" onClick={()=>{handleClick()}}>LOGOUT</button>
        </div>
    
     );
}
const mapStateToProps=(state) => {
    return {
    login: state.login,
    token: state.token
    }
}

//Map the dispatch function to component props
const mapDispatchToProps = (dispatch)=>{
    return{
    clearStore: (payload) =>{dispatch({type:'CLEAR_STORE',payload:payload})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)