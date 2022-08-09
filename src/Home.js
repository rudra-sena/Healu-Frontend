import {connect} from 'react-redux';
import { useHistory } from 'react-router';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTicketAlt,faBus,faTshirt,faCheese,faMobile,faBolt} from '@fortawesome/free-solid-svg-icons';
import './styles/home.css'

import grabon from './images/grabon.png'
import ad1 from './images/ad1.png'
import ad2 from './images/ad4.jpg'
import ad3 from './images/ad5.jpg'
import card1 from './images/card1.png'
import logo from './images/logo.jpg'

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
        
            <h1>HOME</h1>
            
                
        
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
