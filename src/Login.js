import {useState, useEffect} from 'react';
//import Home from './Home';

import Home from './Home';

const Login = () => {

//State variables of Login Parameters
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const[verificationToken,setToken]=useState('');
const[login,setLogin]=useState(false);
const[store,setStore]=useState(null);





useEffect(()=>{
    storeUpdate();
})

//Update store variable to sync with local storage
const storeUpdate =()=>{
    setStore(JSON.parse(localStorage.getItem('login')));
    if(store && store.login){
        setLogin(true);
        setStore(store);
    }
}

  //Handling submit function 
  const loginRequest= (e)=>{
    const user= {email: email,password: password, verificationToken: verificationToken};

    e.preventDefault();

    //Setting user params and Login Req
    
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
            localStorage.setItem('login',JSON.stringify({
                login: true,
                token: data.jwtToken
            })) 
            storeUpdate();
                
        }else if(data.message==='Email or password is incorrect'){
            setLogin(false);
            setEmail('');
            setPassword('');
            setToken('');
            window.alert("Invalid login data")
        }
      })        
  }

    return ( 
              
    <div className="login">
    {
        !login?

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

        <label for="token">TOKEN</label>
        <input type="text"
        id="token"
        required
        value={verificationToken}
        onChange={(e)=>setToken(e.target.value)}
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

export default Login;