import { useDispatch, useSelector } from "react-redux";
import { addProduct,applyFilter,setFilterCategory,setCategory } from "../../features/productSlice";
import { useState } from "react";
import ProductList from "./ProductList";
import { formatPrice } from "../../ultils/formatPrice";
function ProductForm() {
  // khai báo state
  // dùng để quản lí các giá trị nhập vào từ người dùng
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [moisture, setMoisture] = useState(false);
  const [thickness, setThickness] = useState('17 mm');
  const [mainImage, setMainImage] = useState(null);
  const [subImages,setSubImages] =useState([])

  // xử lí logic redux
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const filter =useSelector((state) => state.product.filterCategory);
  const category = useSelector((state) => state.product.options.category);
  const handleMainImage = (e) => {
    e.preventDefault();
  const file =e.target.files[0] 
    setMainImage(file); 
     e.target.reset()
  }
  const handleSubImages = (e) => {
    e.preventDefault();
  const files = Array.from(e.target.files)
    setSubImages(files);
  e.target.reset()}
  const handlePrice = (e) => {
    const formatted = formatPrice(e.target.value);
    setPrice(formatted);
  };
  // ham filter
  const handleFilter = (e) => {
    const selectedCategory = e.target.value;
    dispatch(setFilterCategory(selectedCategory));
    dispatch(applyFilter());
  }
// hàm subbmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || price.trim() === '' || desc.trim() === '') {
      return;
    }

    const rawPrice = price.replace(/\./g, ''); // chuyển lại về dạng số nguyên

    const newProduct = {
      name,
      price: rawPrice,
      desc,
      thickness,
      moisture,
      category: category,
      mainImage: mainImage ? URL.createObjectURL(mainImage) : null,
      subImages: subImages.length > 0 ? subImages.map(file => URL.createObjectURL(file)) : [],
    };

    dispatch(addProduct(newProduct));
    setName('');
    setPrice('');
    setDesc('');
    setThickness('17 mm');
    setMoisture(false);
    setMainImage(null);
    setSubImages([]);
    console.log(newProduct)
  };

  return (
    <>
      <h1 className='text-center text-3xl text-blue-500 mt-10 uppercase'>Trang đăng sản phẩm</h1>
      <form
        onSubmit={handleSubmit}
        className='flex w-[1000px] shadow-2xl shadow-blue-500 justify-around items-center mx-auto mt-20 gap-20 p-5'
        id="myProductForm"
      >
        <div className="flex flex-col gap-10 w-[50%] ">
          <div>
            <label>
              <p className='text-shadow-2xs text-blue-500'>Nhập sản phẩm:</p>
              <input
                type="text"
                className='outline-0 bg-blue-100 p-2 focus:bg-blue-200 transition-all w-full mt-3'
                placeholder='enter your product'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label>
              <p className='text-shadow-2xs text-blue-500'>Nhập giá thành:</p>
              <input
                type="text"
                className='outline-0 bg-blue-100 p-2 focus:bg-blue-200 transition-all w-full mt-3'
                placeholder="enter product's price"
                value={price}
                onChange={handlePrice}
              />
            </label>
          </div>

          <div>
            <label>
              <p className='text-shadow-2xs text-blue-500'>Nhập mô tả:</p>
              <textarea
                className='h-40 outline-0 bg-blue-100 p-2 focus:bg-blue-200 transition-all w-full mt-3'
                placeholder='enter the description'
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
          <h2 className="font-bold text-green-800">Chọn độ dày ván</h2>
          <div className="flex gap-10">
            {['17 mm', '18 mm', '20 mm'].map((value) => (
              <label key={value}>
                {value}
                <input
                  className="ml-2 accent-green-700"
                  type="radio"
                  name="thickness"
                  value={value}
                  checked={thickness === value}
                  onChange={(e) => setThickness(e.target.value)}
                />
              </label>
            ))}
          </div>

          <label className="text-center">
            <p className="font-bold text-green-800">Chọn chống ẩm</p>
            <input
              className="mt-3"
              type="checkbox"
              checked={moisture}
              onChange={(e) => setMoisture(e.target.checked)}
            />
          </label>

          <label className="text-center">
            <p className="font-bold text-green-800">Hạng mục</p>
            <select
              className="custom-select mt-3 border border-gray-300 p-2 rounded w-[200px] text-center outline-green-900"
              value={category} 
              onChange={(e) => dispatch(setCategory(e.target.value))}
            >
              <option value="Tủ quần áo">Tủ quần áo</option>
              <option value="Tủ bếp">Tủ bếp</option>
              <option value="Phòng khách">Phòng khách</option>
              <option value="Tủ rượu">Tủ rượu</option>
              <option value="Giường ngủ">Giường ngủ</option>
              <option value="Khác">Khác</option>
            </select>
          </label>
          <label  className="text-center flex items-center flex-col justify-center">
            <p className="font-bold text-green-800 text-center mt-2">Hình ảnh chính</p>
            <input className="custom-select mt-2 hover:bg-blue-300 bg-blue-200 p-2 text-center" 
            type="file" 
            accept="image/*"  
            onChange={handleMainImage}/>
            {mainImage && (
  <img className='object-cover object-center mt-5 h-45 rounded-2xl' src={URL.createObjectURL(mainImage)}  />
)}
          </label>
          <label className="text-center flex items-center flex-col justify-center"> 
            <p className="font-bold text-green-800 text-center mt-2">Hình ảnh phụ</p>
            <input 
            className="custom-select mt-2 hover:bg-blue-300 bg-blue-200 p-2 " 
            type="file" 
            accept="image/*"
            multiple
            
            onChange={handleSubImages}/>
            {subImages && subImages.length > 0 && (
              <figure className="mt-5 flex gap-2 overflow-auto h-50">
                {subImages.map((file, index) => (
                  <img
                    key={index}
                    className='object-cover object-center h-45 rounded-2xl'
                    src={URL.createObjectURL(file)}
                    alt={`Sub Image ${index + 1}`}
                  />
                ))}
              </figure>
            )}
          </label>
        </div>
        
      </form>

      <button
        form="myProductForm"
        type='submit'
        className='-translate-x-1/2 bg-blue-300 p-2 w-[120px] ml-[50%] mt-10 rounded-2xl text-white hover:bg-blue-200 hover:scale-110 transition-all'
      >
        SEND
      </button>

      <hr className="mt-10 w-[50%] mx-auto" />

      <div className="ml-50 mt-10 flex items-center gap-5">
        <h2>DANH MỤC:</h2>
        <select value={filter} onChange={handleFilter} className="custom-select w-[300px] text-center outline-0 bg-blue-200 p-2 rounded-md shadow-blue-600 shadow-inner">
          <option>Tủ quần áo</option>
          <option>Phòng khách</option>
          <option>Tủ bếp</option>
          <option>Tủ rượu</option>
          <option>Giường ngủ</option>
          <option>tất cả</option>
        </select>
      </div>

      <ProductList product={products} />
    </>
  );
}

export default ProductForm;
