import { useDispatch,useSelector } from "react-redux";
import { addProduct } from "../../features/productSlice";
import { useState } from "react";

function ProductForm() {
const  [name,setName]=useState('')
const  [price,setPrice]=useState('')
const  [desc,setDesc]=useState('')
const [moisture,setMoisture]=useState(false)
const [thickness,setThickness]=useState('17 mm')
const dispatch=useDispatch()
const products=useSelector (state=> state.product.products)
const handleSubmit =(e)=>{
    e.preventDefault()
    if(name.trim()=== '' || price.trim()=== '' || desc.trim() === ''){
        return;
    }
    const newProduct={
        name:name,
        price:price,
        desc:desc,  
        thickness:thickness,
        moisture:moisture
    }
    
    dispatch(addProduct(newProduct))
    setName('')
    setPrice('')
}


    return (
        <>
        <h1 className='text-center text-3xl text-blue-500 mt-10 uppercase'>Trang đăng sản phẩm</h1>
            <form 
            onSubmit={handleSubmit}  
            className='flex  w-[1000px] shadow-2xl shadow-blue-500 justify-around items-center  mx-auto mt-20 gap-20 p-5'
            id="myProductForm"
            >
                
               
<div className="flex flex-col gap-10 w-[50%] ">
    <div>
         {/* ô nhập tên sản phẩm */}
                      <label>
                            <p className=' text-shadow-2xs text-blue-500'> Nhập sản phẩm :</p>
                            <input type="text"
                                className='outline-0 bg-blue-100 p-2 focus:bg-blue-200 transition-all w-full mt-3'
                                placeholder='enter your product'
                                value={name}
                                onChange={(e)=>{setName(e.target.value)}}
                            />
                      </label>
    </div>
    {/* giá thành */}
    <div>
                       <label>
                            <p className=' text-shadow-2xs text-blue-500'> Nhập giá thành :</p>
                            <input type="text"
                             className='outline-0 bg-blue-100 p-2 focus:bg-blue-200 transition-all  w-full  mt-3'
                            placeholder="enter product's price"
                            value={price}
                            onChange={(e)=>{setPrice(e.target.value)}}
                            />
                       </label>
    </div>
    {/* mô tả */}
    <div>
                       <label>
                            <p className=' text-shadow-2xs text-blue-500'> Nhập mô tả :</p>
                            <textarea type="text"
                             className='outline-0 bg-blue-100 p-2 focus:bg-blue-200 transition-all  w-full  mt-3'
                                placeholder='enter the description'
                                value={desc}
                                onChange={(e)=>{setDesc(e.target.value)}}
                            />
                       </label>
    </div>
</div>

{/* khối options */}
<div className="flex flex-col items-center gap-5">
    <h2 className="font-bold">chọn độ dày ván</h2>
  <div className=" flex gap-10">
        <label >
            17 mm
            <input className="ml-2" type="radio" name="thickness" value='17 mm' checked={thickness ==='17 mm'} onChange={(e)=>{setThickness(e.target.value)}} />
        </label>
        <label >
            18mm
            <input className="ml-2" type="radio" name="thickness" value='18 mm' checked={thickness ==='18 mm'}  onChange={(e)=>{setThickness(e.target.value)}}/>
        </label>
        <label >
            20mm
            <input className="ml-2" type="radio" name="thickness" value='20 mm' checked={thickness ==='20 mm'}  onChange={(e)=>{setThickness(e.target.value)}}/>
        </label>
  </div>
  <label name="moistureProof" className="text-center">
    <p className="font-bold">chọn chống ẩm</p>
    <input className="mt-3" type="checkbox" checked={moisture} onChange={(e)=>setMoisture(e.target.checked)} />
  </label>
</div>

            </form>
            {/* buttonSubmmit */}
            <button
                    form="myProductForm"
                    type='submit' 
                     className='-translate-x-1/2 bg-blue-300  p-2 w-[120px] ml-[50%] mt-10 rounded-2xl text-white hover:bg-blue-200 hover:scale-110 transition-all '>
                        SEND </button>
            <hr className="mt-10 w-[50%] mx-auto"/>
            {/* in sản phẩm mới thêm */}
            <ul className="flex justify-center items-center flex-col gap-10  mt-20">
            {products.map((item,index)=>{
                return(
                    <li key={index} className="flex gap-20  ">
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                    <span>{item.desc}</span>
                    <span>{item.thickness}</span>
                    <span>{item.moisture? 'có chống ẩm':'không chống ẩm'}</span>
                </li>
                )
            })} 
            </ul>
        </>
    );
}

export default ProductForm;