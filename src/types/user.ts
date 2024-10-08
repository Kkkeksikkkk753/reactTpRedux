
export interface  userState{
    users: any[];
    loading: boolean;
    error: null | string
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCES = 'FETCH_USERS_SUCCES',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}
interface FetchUsersAction {
    type:  UserActionTypes.FETCH_USERS;
}
interface FetchUsersSuccesAction {
    type: UserActionTypes.FETCH_USERS_SUCCES;
    payload: any[]
}
interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string
}

export type UserAction = FetchUsersAction | FetchUsersErrorAction | FetchUsersSuccesAction