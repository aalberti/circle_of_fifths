import {configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import fifthsReducer from "./fifths/circleOfFiths/fifthsReducer";
import searchReducer from "./fifths/search/searchReducer";

const store = configureStore({
    reducer: {
        search: searchReducer,
        fifths: fifthsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store