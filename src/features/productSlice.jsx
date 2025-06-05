    import { createSlice } from "@reduxjs/toolkit";

    const productSlice=createSlice({
        name:'productlist',
        initialState:{
            products: [],
            options:{
                category:'Tủ quần áo'
            },
            filterCategory: "tất cả",
            filteredProducts: [], // mảng chứa product đã filter
        },
        reducers:{
            addProduct:(state,action)=>{
            state.products.push(action.payload)
            if (state.filterCategory === "tất cả") {
                state.filteredProducts = state.products;
            } else {
                state.filteredProducts = state.products.filter(
                (product) => product.category === state.filterCategory
                );
            }
            },
            removeProduct: (state, action) => {
            state.products=state.products.filter((product,index) => index !== action.payload);
            },
            setCategory: (state, action) => {
                state.options.category = action.payload;
            },
            setFilterCategory: (state, action) => {
                state.filterCategory = action.payload;
            },
            applyFilter:(state)=>{
                if (state.filterCategory === "tất cả") {
                    state.filteredProducts = state.products;
                } else {
                    state.filteredProducts = state.products.filter(
                        (product) => product.category === state.filterCategory
                    );
                }
                console.log(state.filteredProducts)
        }
    }})


    export const {addProduct,removeProduct,applyFilter,setFilterCategory,setCategory}= productSlice.actions

    export  const productReducer=productSlice.reducer 