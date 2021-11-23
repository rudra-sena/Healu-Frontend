const initState={
    login:false,
    token:''
}

function mainReducer(state=initState,action) {
    if(action.type === 'UPDATE_STORE'){

        //state.login=action.payload.login
        //state.token=action.payload.token
        
        return{
             login:action.payload.login,
             token:action.payload.token
         }   
    }
    else if(action.type ==='CLEAR_STORE'){
        state.login=action.payload.login
        state.token=action.payload.token
        return{
            ...state
        }
    }
    else{
        return{
            ...state
        }
    }

}
 
export default mainReducer;