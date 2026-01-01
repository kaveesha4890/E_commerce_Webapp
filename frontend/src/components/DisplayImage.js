import React from 'react'

const DisplayImage = (
    imgUrl,
    onclose
) => {
  return (
    <div className='flex justify-center p-4'>
      <img src={imgUrl} alt='img' className='w-full h-full'/>
      
    </div>
  )
}

export default DisplayImage
