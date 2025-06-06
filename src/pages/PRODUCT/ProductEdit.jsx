import pic1 from '../../assets/pic1.jpg';
import pic2 from '../../assets/pic2.jpg';    
import pic3 from '../../assets/pic3.jpg';    
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
function ProductEdit() {
    return (
        <>
           <h1 className=' text-center text-blue-600  mt-20'> TRANG CHỈNH SỬA SẢN PHẨM</h1> 
           <form className='flex gap-10 w-[1200px] mx-auto mt-10 shadow-xl shadow-blue-300 p-8 rounded-2xl border border-blue-300'>
            {/* khối sửa ảnh */}
           <section className='flex gap-5 items-center '>
            {/* ảnh chính */}
             <div>
                <input className='text-md' accept='' type="file" />
                <figure className='overflow-hidden p-2 border border-blue-500 rounded-lg '>
                    <img className='w-auto h-100 rounded-lg object-center object-cover' src={pic1} alt="" />
                    
                    </figure>
                </div>
            {/* khối ảnh phụ */}
             <div>
                <figure className=' rounded-2xl flex flex-col gap-5 overflow-scroll overflow-y overflow-x-hidden auto h-[500px]'>
                <img className='w-auto h-50 object-center object-cover' src={pic1} alt="" />
                <img className='w-auto h-50 object-center object-cover' src={pic2} alt="" />
                <img className='w-auto h-50 object-center object-cover' src={pic3} alt="" />
                </figure>
             </div>
           </section >
           {/* khối nội dung */}
           <section className='flex flex-col gap-10 w-[600px] justify-center items-center'>
            
            <label >
                <p  className='text-green-400 text-xl'>CHỈNH SỬA TÊN </p>
                <input
                className=' outline-0 border border-blue-500 rounded-lg p-2 w-[400px] focus:bg-blue-50 focus:border-0 mt-2 transition-all '
                 type="text"
                placeholder='sửa tên sản phẩm' />
            </label>
            <label >
                 <p  className='text-green-400 text-xl'>CHỈNH SỬA GIÁ </p>
                <input
                className=' outline-0 border border-blue-500 rounded-lg p-2 w-[400px] focus:bg-blue-50 focus:border-0 mt-2 transition-all '
                type="text"
                placeholder='sửa giá sản phẩm'  />
            </label>
            <label >
                 <p className='text-green-400 text-xl'>CHỈNH SỬA MÔ TẢ </p>
                <input
                className=' outline-0 border border-blue-500 rounded-lg p-2 w-[400px] focus:bg-blue-50 focus:border-0 mt-2 transition-all '
                type="text"
                placeholder='sửa mô tả sản phẩm'  />
            </label>
           
           </section>
           </form>
        </>
    );
}

export default ProductEdit;