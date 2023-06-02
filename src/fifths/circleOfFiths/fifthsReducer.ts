import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Scale} from "../theory/MusicTheory";
import {RootState} from "../../store";

export const fifthsSlice = createSlice({
    name: 'fifths',
    initialState: {
        selectedScale: null as (null | Scale),
    },
    reducers: {
        setSelectedScale: (state, action: PayloadAction<Scale>) => {
            state.selectedScale = action.payload
        }
    }
})
export const {setSelectedScale} = fifthsSlice.actions
export const selectedScale = (state:RootState) => state.fifths.selectedScale
export default fifthsSlice.reducer