import React from 'react'
import bannerimage from '../assest/Photo Modern New Collection Banner.jpg'

const BannerProduct = () => {
  return (
    <div className='container mx-auto  rounded overflow-hidden'>
      <div className='h-full w-full bg-slate-200'>
        <img src={bannerimage} alt='bannerimage'className=''/>
      </div>
    </div>
  )
}

export default BannerProduct
