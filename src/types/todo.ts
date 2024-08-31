
export enum actionTypes{
    FETCH_TODO = 'FETCH_TODO',
    FETCH_TODO_SUCCES = 'FETCH_TODO_SUCCES',
    FETCH_TODO_ERROR = 'FETCH_TODO_ERROR'
}

interface actionFetchTodo{
    type: actionTypes.FETCH_TODO
}

interface actionFetchTodoSucces{
    type: actionTypes.FETCH_TODO_SUCCES,
    payload: any[]
}

interface actionFetchTodoError{
    type: actionTypes.FETCH_TODO_ERROR
    payload: string
}

export interface Itodo{
    title: string,
    id: number
}
export interface ITodoState {
    todo: Itodo[]
    error: string | null
    loading: boolean
}

export type actionTodo = actionFetchTodo | actionFetchTodoSucces | actionFetchTodoError