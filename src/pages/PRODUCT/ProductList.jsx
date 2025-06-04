
import pic1 from '../../assets/test.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '../../features/productSlice';
import { Link } from 'react-router-dom';
function ProductList() {
    const dispatch=useDispatch()
    const products=useSelector (state=> state.product.products)
    if (!products ||products.length === 0) return <p className='text-center mt-10'>Chưa có sản phẩm nào</p>;
    const handleDelete=(index)=>{
        
        dispatch(removeProduct(index))
    }
    return (
        <section className=' grid grid-cols-4 gap-4 p-4 w-[1000px] mx-auto mt-20'>
       { products.map((product, index) => (
            <div   key={index} className='bg-neutral-100 shadow-green-500  rounded-lg p-4 hover:shadow-md transition-shadow duration-300'>
                <img src={pic1}  alt={product.name} className='w-full h-48 object-cover rounded-t-lg' />
                <h2 className=' line-clamp-2 leading-tight min-h-[3.5rem] text-xl font-semibold mt-2'>{product.name}</h2>
                <p className='line-clamp-2 min-h-10 text-gray-600 '>{product.desc}</p>
                <p className='text-blue-500 font-bold  mt-2'>Giá: {product.price} VNĐ</p>
                <p className='text-gray-500 '>Danh mục: {product.category}</p>
                <div className='flex justify-around mt-2 gap-2'>
                    <button onClick={()=>handleDelete(index)} className='w-1/2 p-2 bg-red-400 text-white rounded-2xl cursor-pointer hover:bg-red-300 hover:scale-102'>delete</button>
                    <Link to='/edit' className='text-center w-1/2 p-2 bg-blue-400 text-white rounded-2xl cursor-pointer hover:bg-blue-300 hover:scale-102'>
                        <button >edit</button>
                    </Link >
                </div >
            </div>
        ))}
           
        </section>
    );
}

export default ProductList;