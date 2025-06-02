import { createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:'productlist',
    initialState:{
        products: []
    },
    reducers:{
        addProduct:(state,action)=>{
        state.products.push(action.payload)
        },
        removeProduct: (state, action) => {
        state.products=state.products.filter(product => product.id !== action.payload);
        },
        moistureChecked:(state, action)=>{
        state = action.payload
        } ,
        thicknessOption:(state, action)=>{
        state = action.payload
        }
        
    }
})


export const {addProduct,removeProduct,moistureChecked,thicknessOption}= productSlice.actions

export  const productReducer=productSlice.reducer 