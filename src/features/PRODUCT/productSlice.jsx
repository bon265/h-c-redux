    import { createSlice } from "@reduxjs/toolkit";
    import { v4 as uuidv4 } from 'uuid';
    const productSlice=createSlice({
        name:'productlist',
        initialState:{
            products: [],
            options:{
                category:'Tủ quần áo',
                brand:'Ba Thanh',
            },
            
            filteredProducts: [], // mảng chứa product đã filter
        },
        reducers:{
        addProduct: (state, action) => {
        const newProduct = { ...action.payload, id: uuidv4() }
        state.products.push(newProduct);
        productSlice.caseReducers.applyFilter(state, { payload: state.options.category });
        
    },
            removeProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
             // Cập nhật filteredProducts luôn
             
             productSlice.caseReducers.applyFilter(state, { payload: state.options.category });
    },
            setBrand: (state, action) => {
                state.options.brand = action.payload;
            },  
            setCategory: (state, action) => {
                state.options.category = action.payload;
            },
            
            applyFilter: (state, action) => {
            if(action.payload === 'tất cả') {
            state.filteredProducts = state.products;
            } else {
            state.filteredProducts = state.products.filter(p => p.category === action.payload);   
  }
},
           updateProduct: (state, action) => {
      const { id, updatedProduct } = action.payload;
      const index = state.products.findIndex(product => product.id === id);
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...updatedProduct };
        productSlice.caseReducers.applyFilter(state, { payload: state.options.category });
      }
    },
    }})


    export const {addProduct,removeProduct,applyFilter,setCategory,setBrand,updateProduct}= productSlice.actions

    export  const productReducer=productSlice.reducer 