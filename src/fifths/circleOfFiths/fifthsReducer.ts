import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Scale} from "../theory/MusicTheory";
import {RootState} from "../../store";

export const fifthsSlice = createSlice({
    name: 'fifths',
    initialState: {
        selectedScaleName: null as (null | string),
    },
    reducers: {
        setSelectedScale: (state, action: PayloadAction<string>) => {
            state.selectedScaleName = action.payload
        }
    }
})
export const {setSelectedScale} = fifthsSlice.actions
export const selectedScale = (state:RootState) => state.fifths.selectedScaleName ? new Scale(state.fifths.selectedScaleName) : null
export default fifthsSlice.reducer