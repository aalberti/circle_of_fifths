import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../store";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        currentSearch: '',
    },
    reducers: {
        changeSearch: (state, action: PayloadAction<string>) => {
            state.currentSearch = action.payload
        }
    }
})

export const {changeSearch} = searchSlice.actions
export const currentSearch = (state:RootState) => state.search.currentSearch
export default searchSlice.reducer