import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const musicologistSlice = createSlice({
    name: 'musicologist',
    initialState: {
        currentSearch: ''
    },
    reducers: {
        changeSearch: (state, action: PayloadAction<string>) => {
            state.currentSearch = action.payload
        }
    }
})
const store = configureStore({
    reducer: {
        musicologist: musicologistSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const {changeSearch} = musicologistSlice.actions
export const currentSearch = (state:RootState) => state.musicologist.currentSearch
export default store