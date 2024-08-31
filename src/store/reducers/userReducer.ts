import {UserAction, UserActionTypes, userState} from "../../types/user";

const defState : userState = {
    users: [],
    loading: false,
    error: null
}
export const userReducer = (state = defState, action : UserAction) : userState => {
   switch (action.type) {
       case UserActionTypes.FETCH_USERS:
           return {...state, loading: true, error: null}
       case UserActionTypes.FETCH_USERS_SUCCES:
           return {...state, loading: false, error: null, users: action.payload}
       case UserActionTypes.FETCH_USERS_ERROR:
           return {...state, loading: false, error: action.payload}
       default:
           return state
   }
}