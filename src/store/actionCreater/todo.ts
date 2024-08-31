import {Dispatch} from "redux";
import {actionTodo, actionTypes, Itodo} from "../../types/todo";
import axios from "axios";

export const fetchTodo = ():any =>{
    return async (dispatch: Dispatch<actionTodo>) => {
        try{
            dispatch({type: actionTypes.FETCH_TODO})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            dispatch({type: actionTypes.FETCH_TODO_SUCCES, payload: <Itodo[]>response.data})
        }catch (e) {
            dispatch({type: actionTypes.FETCH_TODO_ERROR, payload: 'Ошибка подгрузки дел'})
        }
    }
}