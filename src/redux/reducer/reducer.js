import * as types from '../action/actionType'
const initialState ={
    users:{},
    user:{},
    loading:false
}

const userReducers = (state=initialState ,action) =>{
    switch(action.type){
        case types.GET_USERS :
        return {
            ...state,
            users:action.payload,
            // loading:false

        }
        break;
        case types.DELETE_USERS :
            
            return {
                ...state,
                // loading:false
            }
            break;
            case types.ADD_USERS :
            
        return {
            ...state,
            // loading:false
        }
        case types.UPDATE_USERS :
            
            return {
                ...state,
                // loading:false
            }
       case types.GET_SINGLE_USER:
           return {
               ...state,
               user:action.payload
           }
        default:
            return state
           
    

    }
    

}



export default userReducers;