import axios from "axios"
import * as types from "./actionType"

export const getUser = (users) =>({
    type: types.GET_USERS,
    payload:users
  
})
export const deletedUser = () =>({
    type: types.DELETE_USERS,
    
  
})
export const userAdded =()=>({ 
    type:types.GET_USERS,
})
export const userUpdated =()=>({ 
    type:types.UPDATE_USERS,
})
export const getSingUser =(user) =>({
    type:types.GET_SINGLE_USER ,
    payload:user
})
export const loadUser= ()=> {

    return function (dispatch){
        axios.get(`${process.env.REACT_APP_API}`)
        .then((res)=>{
            console.log('res',res)
            dispatch(getUser(res.data)
            )} )
            .catch(error=> console.log(error))
    }
}
export const deleteUser = (id)=> {

    return function (dispatch){
        axios.delete(`${process.env.REACT_APP_API}/${id}`)
        .then((res)=>{
            console.log('res',res)
            dispatch(deletedUser());
            dispatch(loadUser());

        
        } )
            .catch(error=> console.log(error))
    }
}

export const addUser = (user) => {

    return function (dispatch){
        axios.post(`${process.env.REACT_APP_API}`,user)
        .then(res =>{
            console.log(res);
         dispatch(userAdded());
         dispatch(loadUser())
        })
        .catch(error=>console.log(error))
    }
}
export const getSIngleUser = (id) =>{
    return function (dispatch){
        axios.get(`${process.env.REACT_APP_API}/${id}`)
        .then(res=>{console.log(res)
        dispatch( getSingUser(res.data));
        
        })
    }
}
export const updatedUser = (user,id) =>{
    return function (dispatch){
        axios.put(`${process.env.REACT_APP_API}/${id}`,user)
        .then(res=>{console.log(res)
        dispatch( userUpdated());
        dispatch(loadUser());
        
        })
    }
}