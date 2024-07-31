import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SummaryApi from '../common'
import { FaStar } from 'react-icons/fa' 
import { FaStarHalf } from 'react-icons/fa'
import displaySLRCurrency from '../helpers/displayCurrency'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import addToCart from '../helpers/addToCart'
import Context from '../context'


const ProductDetails = () => {
  const [data,setData] = useState({
    productName : "",
    brandName : "",
    category : "",
    productImage : [],
    description : "",
    price : "",
    sellingPrice : ""
  })
  const params = useParams()
  //const [loading,setLoading] = useState(false)
  //const productImageListLoading = new Array(1).fill(null)

  const { fetchUserAddToCart } = useContext(Context)

  const navigate = useNavigate()

  const fetchProductDetails = async()=>{
    //setLoading(true)
    const response = await fetch(SummaryApi.ProductDetails.url,{
      method : SummaryApi.ProductDetails.method,
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify({
        productId : params?.id
      })
    })
    //setLoading(false)
    const dataResponse = await response.json()

    setData(dataResponse?.data)
  }

  console.log("data",data)

  useEffect(()=>{
    fetchProductDetails()
  },[params])

  const handleAddToCart = async(e,id)=>{
    await addToCart(e,id)
    fetchUserAddToCart()
  }

  const handleBuyProduct = async(e,id)=>{
    await addToCart(e,id)
    fetchUserAddToCart()
    navigate("/cart")
  }

  return (
    <div className='container mx-auto p-4'>

      <div className=' min-h-[200px] flex flex-col lg:flex-row gap-4'>
        {/***product Image */}
        <div className='h-90 flex flex-col lg:flex-row-reverse gap-4'>
            <div className='h-[300px] w-[300px]  bg-slate-200'> 
              <img src={data.productImage[0]} alt='img' className='h-full w-full object-scale-down mix-blend-multiply'/>
            </div>
          {/*<div className='h-full'>
            {
              loading ? (
                <div className='flex gap-2 lg:flex-col '>
                  {
                    productImageListLoading.map(el =>{
                      return(
                        <div className='h-20 w-20 bg-slate-200 rounded' key={"loadingImage"}>
                        </div>
                      )
                    })
                  }
                </div>
                
                
              ) : (
                <div className='flex gap-2 lg:flex-col '>
                  {
                    data.productImage.map((imgURL,index) =>{
                      return(
                        <div className='h-20 w-0 bg-slate-200 rounded p-1' key={imgURL}>
                          <img src={imgURL} alt='img' className='w-30 h-30 object-scale-down mix-blend-multiply'/>
                        </div>
                      )
                    })
                  }
                </div>
              )
            }
          </div>*/}

        </div>

          {/***product details */}

          <div>
            <p className='bg-green-200 text-slate-500 px-2 rounded-full inline-block mx-2'>{data.brandName}</p>
            <p className='text-2xl lg:text-3xl font-semibold'>{data.productName}</p>
            <p className='capitalize text-slate-500'>{data.category}</p>
            <p className='flex gap-1 text-yellow-300'>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStarHalf/>
            </p>
            <div className='text-2xl'>
            <p className='text-red-500'>{displaySLRCurrency(data.sellingPrice)}</p>
            <p className='text-slate-500'><s>{displaySLRCurrency(data.price)}</s></p>
            </div>
            <div className='flex items-center gap-3 my-2'>
                  <button className='border-2 border-red-600 rounded px-3 py-1 min-w-[120px] text-red-600 font-medium hover:bg-red-600 hover:text-white' onClick={(e)=>handleBuyProduct(e,data._id)}>Buy</button>
                  <button className='border-2 border-red-600 rounded px-3 py-1 min-w-[120px] font-medium text-white bg-red-600 hover:text-red-600 hover:bg-white'  onClick={(e)=>handleAddToCart(e,data._id)} >Add To Cart</button>
            </div>
            <div>
                  <p className='text-slate-600 font-medium my-1'>Description : </p>
                  <p>{data?.description}</p>
            </div>
          </div>
  
      </div>
      {
        data.category && (
          <HorizontalCardProduct category={data.category} heading={"Recommended product"}/>
        )
      }
    </div>
    
  )
}

export default ProductDetails
