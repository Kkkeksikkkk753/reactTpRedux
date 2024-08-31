import {actionTodo, actionTypes, ITodoState} from "../../types/todo";

const defState : ITodoState = {
    todo: [],
    error: null,
    loading: false
}


export const todoReducer = (state : ITodoState = defState, action: actionTodo): ITodoState => {
    switch (action.type){
        case actionTypes.FETCH_TODO:{
            return{...state, loading: true}
        }
        case actionTypes.FETCH_TODO_ERROR:{
            return{...state, loading: false, error: action.payload}
        }
        case actionTypes.FETCH_TODO_SUCCES:{
            return{...state, loading: false, todo: action.payload}
        }
        default: {
            return state
        }
    }
}