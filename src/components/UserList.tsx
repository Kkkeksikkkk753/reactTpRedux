import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {fetchUsers} from "../store/actionCreater/user";
import {Dispatch} from "redux";
import {UserAction} from "../types/user";
import {useAction} from "../hooks/useAction";

const UserList: React.FC = () => {

    const state = useTypeSelector(state => state.user)
    const {fetchUsers} = useAction()

    useEffect(() => {
        fetchUsers()
    }, [])

    if(state.loading){
        return <h1>Идет загрузка...</h1>
    }
    if(state.error){
        return <h1>{state.error}</h1>
    }

    return (
        <div>
            {state.users.map((user: any) => <div key={user.id}>{user.name}</div>)}
        </div>
    );
};

export default UserList;