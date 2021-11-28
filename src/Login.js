import {useState, useEffect} from 'react';
import Home from './Home';
import {connect} from 'react-redux';
import {useSelector,useDispatch} from 'react-redux'
import { useHistory } from 'react-router';
import LoginCSS from './styles/login.module.css'



const Login = (props) => {
  
  const history=useHistory();

//State variables of Login Parameters
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');

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
              
    <div>
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </head>
      <div className={LoginCSS.header}>
        <b><a class="fa fa-spotify"/>Healu</b>
      </div>
      <h5><b>To continue, log in to Healu</b></h5>

      <div className={LoginCSS.login}>

      <div className={LoginCSS.container1}>
      <div><button className={LoginCSS.continue} id={LoginCSS.fb}><a class="fa fa-facebook" id={LoginCSS.fbi}></a> CONTINUE WITH FACEBOOK</button></div>
      <div><button className={LoginCSS.continue} id={LoginCSS.apple}><a class="fa fa-apple" id={LoginCSS.applei}></a>  CONTINUE WITH APPLE</button></div>
      <div><button className={LoginCSS.continue} id={LoginCSS.google}><a class="fa fa-google" id={LoginCSS.googlei}></a>  CONTINUE WITH GOOGLE</button></div>
      <div><button className={LoginCSS.continue} id={LoginCSS.ph}>CONTINUE WITH PHONE NUMBER</button></div>
      
      
      <div>OR</div>
      

      <form className="login" onSubmit={loginRequest}>
          
      <div className={LoginCSS.label}><label for="email">Email address or username</label></div>
        <input type="text"
        required
        id="email"
        placeholder="Email address or username"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        
        
        <div className={LoginCSS.label}><label for="password">Password</label></div>
        <input type="password"
        required
        id="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        /> 
        
        <div className={LoginCSS.forgot}><u>Forgot your password?</u></div>
        <br/>
        
        <div className={LoginCSS.container2}>

      <div className={LoginCSS.check}>
      
      <div> <input type="checkbox" id="rem" className={LoginCSS.checkbox}/> </div>
      <div> <label for="rem" className={LoginCSS.rem}> Remember me? </label> </div>
      </div>
      
      <div>
        <button className={LoginCSS.btn}>LOG IN</button>

        </div>
      </div>
      </form>
      <h3><b>Don't have an account?</b></h3> 
      <div><button className={LoginCSS.continue} id={LoginCSS.ph}>SIGN UP FOR HEALU</button></div>

      </div>

      </div>
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