import React, { useState } from 'react'
import { MdModeEditOutline } from 'react-icons/md'
import AdminEditProduct from './AdminEditProduct'
import displaySLRCurrency from '../helpers/displayCurrency'

const AdminProductCard = ({
    data,
    fetchdata
}) => {
    const [editProduct,setEditProduct] = useState(false)

  return (
    <div>
      <div className='bg-white p-4  rounded'>
            <div className='w-40'>
                <div className='w-32 h-32 flex justify-center items-center'>
                    <img src={data?.productImage[0]} alt='productImage'  className=' mx-auto object-fill h-full'/>
                </div>
                <h1 className='text-ellipsis line-clamp-2'>{data.productName}</h1>
                <div>
                    <p className='font-semibold'>
                        {
                            displaySLRCurrency(data.sellingPrice)
                        }
                        
                    </p>

                    <div className='w-fit ml-auto p-2 hover:bg-black rounded-full hover:text-white cursor-pointer' onClick={()=>setEditProduct(true)} >
                        <MdModeEditOutline/>
                    </div> 
                </div>
            </div> 

            {
                editProduct && (
                    <AdminEditProduct productData={data} onclose={()=>setEditProduct(false)} fetchdata={fetchdata}/>
                )
            }
      </div>
    </div>
  )
}

export default AdminProductCard
