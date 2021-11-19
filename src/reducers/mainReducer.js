const initState={
    login:false,
    token:''
}

function mainReducer(state=initState,action) {
    if(action.type === 'UPDATE_STORE'){
        
        const newLogin=localStorage.getItem('login')
        const newToken=localStorage.getItem('token')
        console.log(newLogin)
        console.log(newToken)

        //St state to be in sync with local storage
        const newState={...state,
            login: newLogin,
            token: newToken
        }
        console.log(newState);
         return{
             newState
         }   
    }
    else if(action.type ==='CLEAR_STORE'){
        return{
            login: false,
            token:''
        }
    }
    else{

        return state;
    }

}
 
export default mainReducer;