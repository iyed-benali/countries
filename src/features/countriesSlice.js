import { createSlice, isRejected } from "@reduxjs/toolkit";
import { showAllCountries } from "./countriesAction";

const initialState  ={
    loading:false,
    Data:[],
    CountryData:[],
    error:false,
    succes:false,
    message:""
}

export const countrySlice=createSlice({
    name:'country',
    initialState:{},
    reducers:{
        reset:(state)=>{
            state.loading=false
            state.succes=false
            state.error=false
            state.message=""
        },
        extraReducers:(builder)=>{
            builder.addcase(showAllCountries.pending,(state)=>{
                state.loading=true
            })
            .addCase(showAllCountries.fulfilled, (state, action) => {
                state.loading = false;
                state.CountryData = action.payload;
              })
              
            .addcase(showAllCountries.rejected,(state,action)=>{
                state.loading=false
                state.error=true
                state.message=action.payload
                state.CountryData=[]
            })
        }
    }
})
export default countrySlice.reducer