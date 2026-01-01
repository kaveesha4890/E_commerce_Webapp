import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import displaySLRCurrency from '../helpers/displayCurrency'
import Context from '../context'
import addToCart from '../helpers/addToCart'

const VerticalCart = ({loading,data=[]}) => {

const loadingList = new Array(1).fill(null)
const { fetchUserAddToCart } = useContext(Context)

    const handleAddToCart = async(e,id)=>{
       await addToCart(e,id)
       fetchUserAddToCart()
    }

  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(260px,300px))] justify-center md:justify-between md:gap-4 mr-10'>
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
                                <img src={product?.productImage[0]} alt='productImage' className='object-scale-down h-full hover:scale-110'/>
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
  )
}

export default VerticalCart
