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
                brand: "Ba Thanh",
                category: "Tủ quần áo",
                mainImage: "https://example.com/tu-quan-ao.jpg",
                subImages: ["https://example.com/tu-quan-ao-1.jpg", "https://example.com/tu-quan-ao-2.jpg"]
            }],
            options:{
                category:'Tủ quần áo',
                brand:'Ba Thanh',
            },
            
            filteredProducts: [], // mảng chứa product đã filter
        },
        reducers:{
            addProduct:(state,action)=>{
            const newProducts={...action.payload, id: uuidv4()} 
            state.products.push(newProducts)
            productSlice.caseReducers.applyFilter(state)
            },
            removeProduct: (state, action) => {
            state.filteredProducts=state.filteredProducts.filter((product) => product.id !== action.payload);
            state.products=state.products.filter((product) => product.id !== action.payload);
            },
            setBrand: (state, action) => {
                state.options.brand = action.payload;
            },  
            setCategory: (state, action) => {
                state.options.category = action.payload;
            },
            
            applyFilter:(state)=>{
                // Lọc dựa trên tất cả các key trong options
                state.filteredProducts = state.products.filter(product => {
        // Nếu options có "Tất cả" thì bỏ qua filter đó
                 const matchCategory = state.options.category === 'Tất cả' || product.category === state.options.category;
        // Nếu bạn thêm filter khác, thêm điều kiện ở đây
                return matchCategory;
      });    
        },
            updateProduct:(state, action) => {
                const { id, updatedProduct } = action.payload;
                const index = state.products.findIndex((product) => product.id === id);
                if (index !== -1) {
                    state.products[index] = { ...state.products[index], ...updatedProduct };
                    // Cập nhật lại filteredProducts nếu cần
                    if (state.filterCategory === "tất cả") {
                        state.filteredProducts = state.products;
                    } else {
                        state.filteredProducts = state.products.filter(
                            (product) => product.category === state.filterCategory
                        );
                    }
                }
            }
    }})


    export const {addProduct,removeProduct,applyFilter,setCategory,setBrand,updateProduct}= productSlice.actions

    export  const productReducer=productSlice.reducer 