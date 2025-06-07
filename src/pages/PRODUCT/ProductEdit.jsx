
        import { formatPrice } from '../../ultils/formatPrice'; 
        import { useNavigate } from 'react-router-dom';
        import { useParams } from 'react-router-dom';
        import { useSelector,useDispatch } from 'react-redux';
        import { selectProductById } from '../../features/PRODUCT/productSelector.jsx';
        import { setCategory,setBrand,updateProduct } from '../../features/PRODUCT/productSlice.jsx';
        import { useState } from 'react';
        function ProductEdit() {
            // sử dụng useSelector để lấy dữ liệu từ redux store
            const navigate = useNavigate();
            const dispatch = useDispatch();
            // dùng useSelector để lấy dữ liệu từ redux store
            const {id} = useParams(); // lấy id từ url
            const productDetail = useSelector((state) => selectProductById(state, id));
            const category = useSelector((state) => state.product.options.category);
            const brand = useSelector((state) => state.product.options.brand);
            // khởi tạo state để lưu trữ các giá trị cần chỉnh sửa
            const [name, setName] = useState(productDetail.name? productDetail.name : '');
            const [desc, setDesc] = useState(productDetail.desc? productDetail.desc : '');
            const [price, setPrice] = useState(productDetail.price? productDetail.price : '0');
            const [discount, setDiscount] = useState('');
            const [thickness, setThickness] = useState(productDetail.thickness? productDetail.thickness : '17 mm');
            const [mainImage, setMainImage] = useState(productDetail.mainImage? productDetail.mainImage : null);
            const [subImages, setSubImages] = useState(productDetail.subImages? productDetail.subImages : []);
            // const [moisture, setMoisture] = useState(productDetail.moisture? productDetail.moisture : false);
            //    hàm định dạng ảnh chính
            const handleMainImage = (e) => {
                e.preventDefault();
            const file = e.target.files[0];
                setMainImage(file);
                e.target.value = null; // reset input file
                }
                // hàm định dạng ảnh phụ
            const handleSubImages = (e) => {
                e.preventDefault();
            const files = Array.from(e.target.files);
                setSubImages((prev) => [...prev, ...files]);
                }
            // hàm định dạng discount
            const handleDiscount = (e) => {
                const formatted= formatPrice(e.target.value);
                const regex = /^(100|[1-9]?[0-9])$/;
            if (regex.test(formatted) || formatted === '') {
                setDiscount(formatted);
    }
            }
            // hàm định dạng giá
            const handlePrice = (e) => {
                const formatted = formatPrice(e.target.value);
                setPrice(formatted);
            };
            // hàm submit
            const  handleSubmit = (e) => {
                e.preventDefault();
                if (name.trim() === '' || price.trim() === '' || desc.trim() === '') {
                    return;
                }
                const rawPrice = price.replace(/\./g, ''); // chuyển lại về dạng số nguyên
                const rawDiscount = discount.replace(/\./g, ''); // chuyển lại về dạng số nguyên
                const updatedProduct = {
                    id: id,
                    name,
                    price: rawPrice,
                    desc,
                    discount: rawDiscount,
                    thickness,
                    moisture: productDetail.moisture,
                    category: category,
                    brand: brand,
                    mainImage: mainImage instanceof File ? URL.createObjectURL(mainImage) : mainImage,
                    subImages: subImages.map((img) =>
                    img instanceof File ? URL.createObjectURL(img) : img
                ),  
                };
            //    dispatch(updateProduct({ id, updatedProduct }));
                dispatch(updateProduct({id:id,updatedProduct}))
                navigate('/product-create'); // chuyển hướng về trang danh sách sản phẩm
            
               
            }
            if (!productDetail) {
         return <p className="text-center text-red-500 mt-20">Không tìm thấy sản phẩm với ID này.</p>;
            }
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
                        <input className=' text-md  bg-blue-50 hover:bg-blue-100  p-2 rounded-md' 
                        accept='image/*' 
                        onChange={handleMainImage}
                        type="file" />
                        <figure className='overflow-hidden p-2 border border-blue-500 rounded-lg mt-3 '>
           <img
                 className='w-auto h-100 rounded-lg object-center object-cover'
                src={mainImage ? URL.createObjectURL(mainImage) : productDetail.mainImage}
                alt="main-img"
/>

                            
                            </figure>
                        </div>
                    {/* khối ảnh phụ */}
                    <div>
                    <input className='rounded-md text-md bg-blue-50 hover:bg-blue-100 p-2' accept='image/*' type="file"
                    onChange={handleSubImages}
                    multiple
                    />
                        <figure className='mt-3 rounded-md flex flex-col gap-5 overflow-scroll overflow-y overflow-x-hidden auto h-[500px]'>
                      {subImages.map((image, index) => (
  <img
    key={index}
    className='w-[200px] h-[200px] object-cover rounded-lg'
    src={image instanceof File ? URL.createObjectURL(image) : image}
    alt={`Sub Image ${index + 1}`}
  />
))}
                        </figure>
                    </div>
                </section >
                {/* khối nội dung */}
                <section className='flex flex-col gap-10 w-[600px] justify-center items-center'>
                    
                    <label >
                        <p  className='text-green-400 text-xl'>CHỈNH SỬA TÊN </p>
                        
                        <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={desc}
                        className='h-40 outline-0 border border-blue-500 rounded-lg p-2 w-[400px] focus:bg-blue-50 focus:border-0 mt-2 transition-all '
                        type="text"
                        onChange={(e) => setDesc(e.target.value)}
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
                            value='17 mm'
                            onChange={(e) => setThickness(e.target.value)}
                            checked={thickness === '17 mm'}
                           
                            type="radio" />
                        </label>
                        <label className='flex gap-1  items-center ' >
                            <p>18 mm</p>
                            <input 
                            value='18 mm'
                            onChange={(e) => setThickness(e.target.value)}
                            checked={thickness === '18 mm'}
                           
                            type="radio" />
                        </label>
                        <label className='flex gap-1  items-center ' >
                            <p>20 mm</p>
                            <input 
                            value='20 mm'
                            onChange={(e) => setThickness(e.target.value)}
                            checked={thickness === '20 mm'}
                           
                            type="radio" />
                            
                        </label>
                </div>
                </div>
                {/* thay đổi hạng mục */}
                <label >
                    <p className='text-green-400 text-xl'>THAY ĐỔI HẠNG MỤC</p>
                    <select
                    value={category}
                    onChange={(e)=> dispatch(setCategory(e.target.value))}
                    className='outline-0 border border-blue-500 rounded-lg p-2 w-[400px] focus:bg-blue-50 focus:border-0 mt-2 transition-all '>
                    <option   value="Tủ quần áo">Tủ quần áo</option>
                    <option value="Tủ bếp">Tủ bếp</option>
                    <option value="Phòng khách">Phòng khách</option>
                    <option value="Tủ rượu">Tủ rượu</option>
                    <option value="Giường ngủ">Giường ngủ</option>
                    <option value="Khác">Khác</option>
                        </select>
                </label>
                <label className="text-center">
            <p className="text-green-400 text-xl">Nhãn hiệu ván</p> 
            <select 
            value={brand}
            onChange={(e) => dispatch(setBrand(e.target.value))}
                className='outline-0 border border-blue-500 rounded-lg p-2 w-[400px] focus:bg-blue-50 focus:border-0 mt-2 transition-all '
            >
                <option value='Ba Thanh'>Ba Thanh</option>
                <option value='An Cường'>An Cường</option>
                <option value='Khác'>Khác</option>
            </select>
            </label>
                </section>
                </form>
                <div className="flex justify-center mt-10">
        <button
            type='submit'
            onClick={handleSubmit}
            form='productEdit'
            className='transition-all cursor-pointer p-2.5 bg-cyan-400 hover:bg-cyan-200 hover:text-black text-white rounded-[15px]'>
            UPDATE SẢN PHẨM
        </button>
        </div>          
                </div>
            );
        }

        export default ProductEdit;