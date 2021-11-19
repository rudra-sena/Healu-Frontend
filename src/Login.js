import {useState, useEffect} from 'react';
import Home from './Home';
import {connect} from 'react-redux';
import {useSelector,useDispatch} from 'react-redux'


const Login = (props) => {

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
          //Set login status and JWT token in local storage
        
            localStorage.setItem('login',true);
            localStorage.setItem('token',data.jwtToken);

            //This is printing undefined......
            console.log('Printing update',props.updateStore());

            //This is printing initial state of store(store not getting updated)
            console.log(props.login,props.token);
                
        }else if(data.message==='Email or password is incorrect'){
          localStorage.setItem('login', false)
            setEmail('');
            setPassword('');
            window.alert("Invalid login data")

            //Not getting updated here too
            props.updateStore();
            console.log(props.login,props.token)

        }
      })        
  }

    return ( 
              
    <div className="login">
    {
        !props.login?

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
        </form>
        :
        <Home/>
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
    updateStore: ()=>{dispatch({type:'UPDATE_STORE'})}
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Login)