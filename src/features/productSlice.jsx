import { createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:'productlist',
    initialState:{
        products: [],
        options:{
            category: "Tủ gỗ", // mặc định
        }
    },
    reducers:{
        addProduct:(state,action)=>{
        state.products.push(action.payload)
        },
        removeProduct: (state, action) => {
        state.products=state.products.filter(product => product.id !== action.payload);
        },
        setCategory:(state,action)=>{
        state.options.category=action.payload
        }    
        
    }
})


export const {addProduct,removeProduct,setCategory}= productSlice.actions

export  const productReducer=productSlice.reducer 