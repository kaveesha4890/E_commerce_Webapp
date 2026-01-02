import React, { useContext, useEffect, useState } from 'react'
import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct'
import displaySLRCurrency from '../helpers/displayCurrency'
import { Link } from 'react-router-dom'
import addToCart from '../helpers/addToCart'
import Context from '../context'

const HorizontalCardProduct = ({category,heading}) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const loadingList = new Array(1).fill(null)

    const { fetchUserAddToCart } = useContext(Context)

    const handleAddToCart = async(e,id)=>{
       await addToCart(e,id)
       fetchUserAddToCart()
    }

    const fetchData = async()=>{
        setLoading(true)
        const categoryProduct = await fetchCategoryWiseProduct(category)
        setLoading(false)

        console.log("horizontal data",categoryProduct.data)
        setData(categoryProduct?.data)
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className='container mx-auto px-4 my-6'>
        <h2 className='text-2xl font-semibold py-4'>{heading}</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6'>
        {
            loading ? (
                loadingList.map((product,index)=>{
                    return(
                        
                        <div className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex mx-4'>
                            <div className='bg-slate-200 h-full p-2 min-w-[120px] md:min-w-[145px]'>
                                
                            </div>
                            <div className='p-3'>
                                
                                <div>
                                    <p className='text-blue-600'></p>
                                    <p className='text-slate-600'><s></s></p>
                                </div>
                                <button className=' text-white bg-red-500 hover:bg-red-700 hover:text-white rounded px-2 font-semibold'></button>
                            </div>
                        </div>
                        
                    )
                })
            ):(
                data.map((product,index)=>{
                    return(
                        
                        <Link to={"/product/"+product?._id} className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex mx-4'>
                            <div className='bg-slate-200 h-full p-2 min-w-[120px] md:min-w-[145px]'>
                                <img src={product.productImage[0]} alt='productImage' className='object-scale-down h-full hover:scale-110'/>
                            </div>
                            <div className='p-3'>
                                <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1'>{product?.productName}</h2>
                                <h2 className='capitalize text-slate-500'>{product?.category}</h2>
                                <div>
                                    <p className='text-blue-600'>{displaySLRCurrency(product?.sellingPrice)}</p>
                                    <p className='text-slate-600'><s>{displaySLRCurrency(product?.price)}</s></p>
                                </div>
                                <button className=' text-white bg-red-500 hover:bg-red-700 hover:text-white rounded px-2 font-semibold' onClick={(e)=>handleAddToCart(e,product?._id)}>Add to Cart</button>
                            </div>
                        </Link>
                        
                    )
                })
            )
        }
        </div>
      

    </div>
  )
}

export default HorizontalCardProduct
