import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {Scale} from "./fifths/theory/MusicTheory";

export const musicologistSlice = createSlice({
    name: 'musicologist',
    initialState: {
        currentSearch: '',
        selectedScale: null as (null | Scale),
    },
    reducers: {
        changeSearch: (state, action: PayloadAction<string>) => {
            state.currentSearch = action.payload
        },
        setSelectedScale: (state, action: PayloadAction<Scale>) => {
            state.selectedScale = action.payload
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
export const {changeSearch, setSelectedScale} = musicologistSlice.actions
export const currentSearch = (state:RootState) => state.musicologist.currentSearch
export const selectedScale = (state:RootState) => state.musicologist.selectedScale
export default store