
import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    count : 0
}


const counterSlice = createSlice({
      name:"counter",
    initialState,
    reducers : {
        incCount: (state)=>{
            state.count++
        },

        descCount(state){
            state.count--
        },

        resetCount(state){
            state.count =0
            
        }
    }
})

export const {incCount, descCount, resetCount} = counterSlice.actions

export default counterSlice.reducer;