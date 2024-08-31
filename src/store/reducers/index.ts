import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {todoReducer} from "./todoReducer";

export const rootReducer : any = combineReducers({
    user: userReducer,
    todo: todoReducer
})

export type TypeRootState = ReturnType<typeof rootReducer>;
