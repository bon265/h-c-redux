 export const selectAllProducts = (state) => state.product.products;

 export const selectProductById = (state,id) => {
   return state.product.products.find(product => product.id === id);
 };

