import React, {useEffect} from 'react';
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useAction} from "../hooks/useAction";
import {Itodo} from "../types/todo";

const TodoList: React.FC = () => {
    const STodo = useTypeSelector(state => state.todo)
    const {fetchTodo} = useAction()


    useEffect(() => {
        fetchTodo()
    }, [])


    if(STodo.loading){
        return <h1>Идет загрузка...</h1>
    }
    if(STodo.error){
        return <h1>{STodo.error}</h1>
    }
    return (
        <div>
            {STodo.todo.map((t: Itodo) => <div key = {t.id}>{t.title}</div>)}
        </div>
    );
};

export default TodoList;