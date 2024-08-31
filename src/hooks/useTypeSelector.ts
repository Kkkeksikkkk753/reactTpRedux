import {TypedUseSelectorHook, useSelector} from "react-redux";
import {TypeRootState} from "../store/reducers";


export const useTypeSelector: TypedUseSelectorHook<TypeRootState> = useSelector