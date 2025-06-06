    import { createSlice } from "@reduxjs/toolkit";
    import { v4 as uuidv4 } from 'uuid';
    const productSlice=createSlice({
        name:'productlist',
        initialState:{
            products: [{
                id: uuidv4(),
                name: "Tủ quần áo gỗ tự nhiên",
                price: "2.500.000",
                desc: "Tủ quần áo gỗ tự nhiên cao cấp, thiết kế sang trọng, bền đẹp.",
                thickness: "17 mm",
                moisture: false,
                category: "Tủ quần áo",
                mainImage: "https://example.com/tu-quan-ao.jpg",
                subImages: ["https://example.com/tu-quan-ao-1.jpg", "https://example.com/tu-quan-ao-2.jpg"]
            }],
            options:{
                category:'Tủ quần áo'
            },
            filterCategory: "tất cả",
            filteredProducts: [], // mảng chứa product đã filter
        },
        reducers:{
            addProduct:(state,action)=>{
            const newProducts={...action.payload, id: uuidv4()} 
               state.products.push(newProducts)
            if (state.filterCategory === "tất cả") {
                state.filteredProducts = state.products;
            } else {
                state.filteredProducts = state.products.filter(
                (product) => product.category === state.filterCategory
                );
            }
            },
            removeProduct: (state, action) => {
            state.filteredProducts=state.filteredProducts.filter((product) => product.id !== action.payload);
            state.products=state.products.filter((product) => product.id !== action.payload);
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
                
        }
    }})


    export const {addProduct,removeProduct,applyFilter,setFilterCategory,setCategory}= productSlice.actions

    export  const productReducer=productSlice.reducer 