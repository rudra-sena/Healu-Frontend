import {useState, useEffect} from 'react';
import Home from './Home';
import {connect} from 'react-redux';
import {useSelector,useDispatch} from 'react-redux'
import { useHistory } from 'react-router';


const Login = (props) => {

  const history=useHistory();

//State variables of Login Parameters
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');

const checkState=() => {
  console.log(props);
}


  //Handling submit function 
  const loginRequest= (e)=>{

    //Setting user params and Login Req
    const user= {email: email,password: password};

    e.preventDefault();

    fetch('http://localhost:4000/accounts/authenticate/', {
      
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type" : "application/json"
        },
        body: JSON.stringify(user)

      })
      .then((res)=>res.json())
      .then((data)=>{

        if(data.isVerified){
        
            props.updateStore({login:true,token:data.jwtToken});
            history.push('/home')
                
        }else if(data.message==='Email or password is incorrect'){
            setEmail('');
            setPassword('');
            window.alert("Invalid login data")
            props.updateStore({login:false});
        }
      })        
  }

  if(props.login===true){
    history.push('/home')
  }
  
    return ( 
              
    <div className="login">
    {
        

      <form className="login" onSubmit={loginRequest}>
          <br /><br/>
      <label for="email">EMAIL</label>
        <input type="text"
        id="email"
        required
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <br/><br/>
        
        <label for="password">PASSWORD</label>
        <input type="password"
        id="password"
        required
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        /> 
        <br/><br/>

        <button>Login</button>
        <br/><br/>
        <h3 style={{color:'blue'}}>Login to enter the Home Page</h3>
        
        </form>
        
}
        </div>
    );

}

//Map the store to component props
const mapStateToProps=(state)=>{
  return{
    login: state.login, 
    token: state.token
  };
};

//Map the dispatch function to component props
const mapDispatchToProps=(dispatch)=>{
  return{
    updateStore: (payload)=>{dispatch({type:'UPDATE_STORE', payload: payload})}
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Login)