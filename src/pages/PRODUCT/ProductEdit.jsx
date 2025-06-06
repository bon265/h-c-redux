    import pic1 from '../../assets/pic1.jpg';
    import pic2 from '../../assets/pic2.jpg';    
    import pic3 from '../../assets/pic3.jpg';   
    import { formatPrice } from '../../ultils/formatPrice'; 
    // import { useParams } from 'react-router-dom';
    // import { useSelector } from 'react-redux';
    import { useState } from 'react';
    function ProductEdit() {
        const [price, setPrice] = useState('');
        const [discount, setDiscount] = useState('');
        const handleDiscount = (e) => {
            const formatted= formatPrice(e.target.value);
            setDiscount(formatted);
        }
        const handlePrice = (e) => {
            const formatted = formatPrice(e.target.value);
            setPrice(formatted);
        };
        return (
            <div className='w-'>
            <h1 className=' text-center text-blue-600  mt-20'> TRANG CHỈNH SỬA SẢN PHẨM</h1> 
            <form
            id='productEdit'
            className='flex gap-10 w-[1500px] mx-auto mt-10 shadow-xl shadow-blue-300 p-8 rounded-2xl border border-blue-300'>
                {/* khối sửa ảnh */}
            <section className='flex gap-5 items-center '>
                {/* ảnh chính */}
                <div>
                    <input className=' text-md  bg-blue-50 hover:bg-blue-100  p-2 rounded-md' accept='image/*' type="file" />
                    <figure className='overflow-hidden p-2 border border-blue-500 rounded-lg mt-3 '>
                        <img className='w-auto h-100 rounded-lg object-center object-cover' src={pic1} alt="" />
                        
                        </figure>
                    </div>
                {/* khối ảnh phụ */}
                <div>
                <input className='rounded-md text-md bg-blue-50 hover:bg-blue-100 p-2' accept='image/*' type="file" />
                    <figure className='mt-3 rounded-md flex flex-col gap-5 overflow-scroll overflow-y overflow-x-hidden auto h-[500px]'>
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
                    value={price}
                    onChange={handlePrice}
                className=' outline-0 border border-blue-500 rounded-lg p-2 w-[400px] focus:bg-blue-50 focus:border-0 mt-2 transition-all '
                    type="text"
                    placeholder='sửa giá sản phẩm'  />
                </label>
                <label >
                    <p className='text-green-400 text-xl'>CHỈNH SỬA MÔ TẢ </p>
                    <textarea
                    className='h-40 outline-0 border border-blue-500 rounded-lg p-2 w-[400px] focus:bg-blue-50 focus:border-0 mt-2 transition-all '
                    type="text"
                    placeholder='sửa mô tả sản phẩm'  />
                </label>
                <label >
                    <p className='text-green-400 text-xl'>THÊM GIẢM GIÁ DISCOUNT </p>
                    <input
                    value={discount}
                    onChange={handleDiscount}
                    className=' outline-0 border border-blue-500 rounded-lg p-2 w-[400px] focus:bg-blue-50 focus:border-0 mt-2 transition-all '
                    type="text"
                    placeholder='discount'  />
                </label>
                {/* khối chọn độ dày */}
                <div className='flex flex-col justify-center items-center'>
                <p  className='text-green-400 text-xl'>chọn độ dày ván</p>
                <div className=' flex gap-10 mt-3'>
                    <label className='flex gap-1  items-center ' >
                        <p>17 mm</p>
                        <input 
                        type="radio" />
                    </label>
                    <label className='flex gap-1  items-center ' >
                        <p>18 mm</p>
                        <input 
                        type="radio" />
                    </label>
                    <label className='flex gap-1  items-center ' >
                        <p>20 mm</p>
                        <input 
                        type="radio" />
                    </label>
            </div>
            </div>
            {/* thay đổi hạng mục */}
            <label >
                <p className='text-green-400 text-xl'>THAY ĐỔI HẠNG MỤC</p>
                <select className='outline-0 border border-blue-500 rounded-lg p-2 w-[400px] focus:bg-blue-50 focus:border-0 mt-2 transition-all '>
                <option   value="Tủ quần áo">Tủ quần áo</option>
                <option value="Tủ bếp">Tủ bếp</option>
                <option value="Phòng khách">Phòng khách</option>
                <option value="Tủ rượu">Tủ rượu</option>
                <option value="Giường ngủ">Giường ngủ</option>
                <option value="Khác">Khác</option>
                    </select>
            </label>
            <label className="text-center">
          <p className="'text-green-400 text-xl">Nhãn hiệu ván</p> 
          <select 
             className='outline-0 border border-blue-500 rounded-lg p-2 w-[400px] focus:bg-blue-50 focus:border-0 mt-2 transition-all '
          >
            <option value="">Ba Thanh</option>
            <option value="">An Cường</option>
            <option value="">Khác</option>
          </select>
          </label>
            </section>
            </form>
            <div className="flex justify-center mt-10">
    <button
        form='productEdit'
        className='transition-all cursor-pointer p-2.5 bg-cyan-400 hover:bg-cyan-200 hover:text-black text-white rounded-[15px]'>
        UPDATE SẢN PHẨM
    </button>
    </div>          
            </div>
        );
    }

    export default ProductEdit;